import { optimize } from '$lib/utils/optimizeImage';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const slices = [
		{
			component: 'HeroClassicSmall',
			data: {
				title: 'We create the digital products of tomorow',
				subtitle:
					'Etsy roof party hashtag, iceland gochujang sus copper mug palo santo. Mumblecore wayfarers tofu vice pinterest roof party swag cliche 8-bit bodega boys live-edge mukbang freegan.',
				cta: {
					title: "Let's build together",
					link: ''
				},
				image: {
					stats: await optimize('./static/images/hero-services.jpg'),
					alt: ''
				}
			}
		},
		{
			component: 'FeatureListImageText',
			data: {
				features: [
					{
						title: 'This is some text describing a cool service of the company',
						text: 'Etsy roof party hashtag, iceland gochujang sus copper mug palo santo. Mumblecore wayfarers tofu vice pinterest roof party swag cliche 8-bit bodega boys live-edge mukbang freegan.',

						image: {
							stats: await optimize('./static/images/featureImage2.jpg', {
								widths: [400, 800, 1600]
							}),
							alt: 'feature 1'
						}
					},
					{
						title: 'This is some text describing a cool service of the company',
						text: 'Etsy roof party hashtag, iceland gochujang sus copper mug palo santo. Mumblecore wayfarers tofu vice pinterest roof party swag cliche 8-bit bodega boys live-edge mukbang freegan.',

						image: {
							stats: await optimize('./static/images/featureImage3.jpg', {
								widths: [400, 800, 1600]
							}),
							alt: 'feature 1'
						}
					},
					{
						title: 'This is some text describing a cool service of the company',
						text: 'Etsy roof party hashtag, iceland gochujang sus copper mug palo santo. Mumblecore wayfarers tofu vice pinterest roof party swag cliche 8-bit bodega boys live-edge mukbang freegan.',

						image: {
							stats: await optimize('./static/images/featureImage2.jpg', {
								widths: [400, 800, 1600]
							}),
							alt: 'feature 1'
						}
					},
					{
						title: 'This is some text describing a cool service of the company',
						text: 'Etsy roof party hashtag, iceland gochujang sus copper mug palo santo. Mumblecore wayfarers tofu vice pinterest roof party swag cliche 8-bit bodega boys live-edge mukbang freegan.',

						image: {
							stats: await optimize('./static/images/featureImage3.jpg', {
								widths: [400, 800, 1600]
							}),
							alt: 'feature 1'
						}
					}
				]
			}
		}
	];
	return {
		slices
	};
};
