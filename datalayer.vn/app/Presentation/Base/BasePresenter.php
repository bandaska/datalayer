<?php

declare(strict_types=1);

namespace App\Presentation\Base;

use App\Components\DbContentControlFactory;
use App\Model\ArticleService;
use Nette;

abstract class BasePresenter extends Nette\Application\UI\Presenter
{
	/** @var \Nette\Database\Context */
	public $database;
	/** @var \Nette\Caching\Cache */
	public $cache;

	protected function startup(): void
	{
		parent::startup();

		// Nastavte si uživatele a heslo
		$user = 'vn';
		$pass = '555';

		$httpRequest = $this->getHttpRequest();
		$httpResponse = $this->getHttpResponse();

		// Získání údajů z hlavičky
		$authUser = $httpRequest->getUrl()->getUser();
		$authPass = $httpRequest->getUrl()->getPassword();

		// Pokud server nepředává údaje přes URL objekt (časté u Apache mod_php), zkusíme PHP_AUTH
		if (!$authUser && isset($_SERVER['PHP_AUTH_USER'])) {
			$authUser = $_SERVER['PHP_AUTH_USER'];
			$authPass = $_SERVER['PHP_AUTH_PW'];
		}

		// Ověření
		if ($authUser !== $user || $authPass !== $pass) {
			// Odeslání hlavičky pro vyžádání hesla
			$httpResponse->setHeader('WWW-Authenticate', 'Basic realm="Development"');
			$httpResponse->setCode(401);

			// Ukončení s chybovou hláškou pro uživatele, kteří stisknou "Zrušit"
			echo 'Pro přístup k této sekci je vyžadováno přihlášení.';
			$this->terminate();
		}
	}
	function __construct(		public ArticleService $articleService,
								 public DbContentControlFactory $contentFactory,
								 \Nette\Database\Context $connection,
								 \Nette\Caching\Cache $cache)
	{
		parent::__construct();
		$this->database = $connection;
		$this->cache = $cache;

		\Tracy\Debugger::enable(\Tracy\Debugger::DEVELOPMENT);
		\Tracy\Debugger::$maxDepth = 6;
	}
}
