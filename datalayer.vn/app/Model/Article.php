<?php

declare(strict_types=1);

namespace App\Model;

use DateTimeImmutable;

final class Article
{
	public function __construct(
		public readonly int $id,
		public readonly string $title,
		public readonly string $slug,
		public readonly string $author,
		public readonly DateTimeImmutable $date,
		public readonly string $content, // Zde bude uložen Latte kód
	) {}
}