<?php

declare(strict_types=1);

namespace App\Presentation\Blog;

use App\Presentation\Base\BasePresenter;
use Nette;
use App\Model\ArticleService;
use App\Components\DbContentControl;
use App\Components\DbContentControlFactory; // Nezapomeňte importovat Interface

final class BlogPresenter extends BasePresenter
{
	private $article;
	public function renderDefault(): void
	{
		// 1. Nastavíme titulek stránky (pro @layout.latte)
		$this->template->title = 'Blog';

		// 2. Získáme všechny články ze služby
		// Metoda getAll() vrací pole objektů Article[]
		$posts = $this->articleService->getAll();

		// 3. Předáme je do šablony
		// V default.latte iterujeme: n:foreach="$posts as $post"
		$this->template->posts = $posts;
	}
	public function actionDetail(string $slug): void
	{
		$this->article = $this->articleService->getBySlug($slug);

		if (!$this->article) {
			$this->error('Článek nebyl nalezen');
		}
	}

	public function renderDetail(string $slug): void
	{
		$this->template->article = $this->article;
		$this->template->title = $this->article->title;
	}

	/**
	 * Nyní je vytvoření komponenty extrémně čisté.
	 * Už žádné tahání tempDir v presenteru.
	 */
	protected function createComponentArticleContent(): DbContentControl
	{
		// Použijeme metodu create() z našeho rozhraní
		return $this->contentFactory->create($this->article);
	}
}