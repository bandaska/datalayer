<?php

declare(strict_types=1);

namespace App\Components;

interface DbContentControlFactory
{
	// Říkáme: "Chci vyrobit komponentu a předám jí článek."
	// Parametr $tempDir si Nette doplní samo z konfigurace.
	public function create(object $article): DbContentControl;
}