import Image, { type ImageOptions } from '@11ty/eleventy-img';

export async function optimize(
	url: string,
	{ formats, widths }: ImageOptions = {
		formats: ['avif', 'webp', 'jpeg'],
		widths: [400, 800, 1600, 2000]
	}
) {
	const stats = await Image(url, {
		formats,
		widths,
		urlPath: '/img/',
		outputDir: './static/img/'
	});

	return stats;
}
