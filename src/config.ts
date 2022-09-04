export const SITE = {
	title: 'Camms.API',
	description: 'Your website description.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Prolog': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'Release Notes', link: 'en/page-2' },
			{ text: 'Upgrade Guide', link: 'en/page-3' },
		],
		'Getting Started': [
			{ text: 'Installation', link: 'en/prolog/' },
			{ text: 'Configuration', link: 'en/prolog/' },
		],
		'The Basics': [
			{ text: 'Routing', link: 'en/basics/' },
			{ text: 'Middleware', link: 'en/basics/' },
			{ text: 'Controller', link: 'en/basics/' },
			{ text: 'Request', link: 'en/basics/' },
			{ text: 'Response', link: 'en/basics/' },
		],
		'More Features': [
			{ text: 'Autentication', link: 'en/features/' },
			{ text: 'Authorization', link: 'en/features/' },
			{ text: 'Cache', link: 'en/features/' },
			{ text: 'Database', link: 'en/features/' },
			{ text: 'Encryption', link: 'en/features/' },
			{ text: 'Errors & Logging', link: 'en/features/' },
			{ text: 'Event', link: 'en/features/' },
			{ text: 'Mail', link: 'en/features/' },
			{ text: 'Queue', link: 'en/features/' },
			{ text: 'Service Container', link: 'en/features/' },
			{ text: 'Service Provider', link: 'en/features/' },
			{ text: 'Testing', link: 'en/features/' },
			{ text: 'Validation', link: 'en/features/' },
			{ text: 'Views', link: 'en/features/' },
		],
	},
};
