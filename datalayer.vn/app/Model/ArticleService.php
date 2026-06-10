<?php

declare(strict_types=1);

namespace App\Model;

use Nette\Database\Explorer;
use DateTimeImmutable;

final class ArticleService
{
	public function __construct(
		private Explorer $database,
	)
	{
	}

	public function getBySlug(string $slug): ?Article
	{
		$row = $this->database->table('articles')
			->where('slug', $slug)
			->fetch();

		if (!$row) {
			return null;
		}

		return $this->createEntity($row);
	}

	public function getAll(): array
	{
		$rows = $this->database->table('articles')
			->order('date DESC')
			->fetchAll();

		return array_map(fn($row) => $this->createEntity($row), $rows);
	}

	private function createEntity($row): Article
	{
		return new Article(
			id: $row->id,
			title: $row->title,
			slug: $row->slug,
			author: $row->ref("author")->name,
			date: $row->date instanceof DateTimeImmutable ? $row->date : new DateTimeImmutable((string)$row->date),
			content: $row->content
		);
	}
}