import { optimize } from '$lib/utils/optimizeImage';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const slices = [
		{
			component: 'HeroClassicSmall',
			data: {
				title: 'Our Services',
				subtitle:
					'You need support from the idea to the launch of your new digital product. As a full service product agency we help you with all aspects of product development.',

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
		},
		{
			component: 'SingleTestimonialTextWithAvatar',
			data: {
				testimonial: {
					name: 'Mary Jason',
					position: 'CEO of Mary Creatives',
					image: {
						stats: await optimize('./static/images/people/joel.jpg', { widths: [160] }),
						alt: 'Mary Jason'
					},
					content: `I'm baby hexagon tote bag marfa 8-bit. Put a bird on it mustache craft beer meditation.
			Shoreditch before they sold out jawn succulents keytar, freegan wolf irony. Bicycle rights
			portland tbh cupping shabby chic.`
				}
			}
		},
		{
			component: 'CtaBanner',
			data: {
				title: "Convinced?<br /> Let's start a project!",
				cta: {
					title: 'Contact Us!',
					link: ''
				}
			}
		}
	];
	return {
		slices
	};
};
