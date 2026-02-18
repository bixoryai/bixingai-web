/// <reference path="../.astro/types.d.ts" />

type LanguageCode = 'en' | 'zh';

interface ParticlesInstance {
	pJS: unknown;
}

interface BixingTranslations {
	[key: string]: string | { title: string; excerpt: string };
}

declare global {
	interface Window {
		toggleLanguage?: () => void;
		applyTranslations?: (lang: string) => void;
		translations?: Record<string, Record<string, string>>;
		insightsTranslations?: Record<LanguageCode, BixingTranslations>;
		pJSDom?: ParticlesInstance[];
	}

	function particlesJS(containerId: string, config: unknown): void;

	interface DocumentEventMap {
		languageToggled: CustomEvent<{ language: LanguageCode | string }>;
	}
}

export {};