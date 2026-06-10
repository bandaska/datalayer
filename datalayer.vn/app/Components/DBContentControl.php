<?php
declare(strict_types=1);

namespace App\Components;

use Nette\Application\UI\Control;
use Nette\Utils\FileSystem;

class DbContentControl extends Control
{
	public function __construct(
		private string $tempDir,      // 1. Toto dodá Nette z config.neon
		private object $article       // 2. Toto dodáte vy z Presenteru
	)
	{
	}

	public function render(): void
	{
		// ... zbytek kódu zůstává stejný ...
		$latteSource = $this->article->content;
		$hash = md5($latteSource);
		$file = $this->tempDir . '/db_templates/' . $hash . '.latte';

		if (!file_exists($file)) {
			FileSystem::write($file, $latteSource);
		}

		$this->template->article = $this->article;
		$this->template->setFile($file);
		$this->template->render();
	}
}