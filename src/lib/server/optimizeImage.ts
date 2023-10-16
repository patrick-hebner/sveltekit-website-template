import Image, { type ImageFormatWithAliases, type ImageOptions } from '@11ty/eleventy-img';
const defaults: {
	formats: ImageFormatWithAliases[];
	widths: number[];
} = {
	formats: ['avif', 'webp', 'jpeg'],
	widths: [400, 800, 1600, 2000]
};

export async function optimize(url: string, options?: ImageOptions) {
	console.log('>>>> Optimize!');
	const stats = await Image(url, {
		formats: options?.formats || defaults.formats,
		widths: options?.widths || defaults.widths,
		urlPath: '/img/',
		outputDir: './static/img/'
	});

	return stats;
}
