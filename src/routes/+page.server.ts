import { optimize } from '$lib/utils/optimizeImage';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const slices = [
		{
			component: 'HeroClassic',
			data: {
				title: 'We create the digital products of tomorow',
				subtitle:
					'Etsy roof party hashtag, iceland gochujang sus copper mug palo santo. Mumblecore wayfarers tofu vice pinterest roof party swag cliche 8-bit bodega boys live-edge mukbang freegan.',
				cta: {
					title: "Let's build together",
					link: ''
				},
				image: {
					stats: await optimize('./static/images/hero.jpg'),
					alt: ''
				}
			}
		},
		{
			component: 'StaticCompaniesBanner',
			data: {
				title: 'We work with top notch companies around the globe',
				logos: [
					{ stats: await optimize('./static/images/companies/apple.png'), alt: '' },
					{ stats: await optimize('./static/images/companies/nike.png'), alt: '' },
					{ stats: await optimize('./static/images/companies/airbnb.png'), alt: '' },
					{ stats: await optimize('./static/images/companies/coca-cola.png'), alt: '' },
					{ stats: await optimize('./static/images/companies/netflix.png'), alt: '' },
					{ stats: await optimize('./static/images/companies/mcdonald.png'), alt: '' }
				]
			}
		},
		{
			component: 'LeftTextWithMultipleImages',
			data: {
				title: 'We have the best experts in the industry',
				text: 'Etsy roof party hashtag, iceland gochujang sus copper mug palo santo. Mumblecore wayfarers tofu vice pinterest roof party swag cliche 8-bit bodega boys live-edge mukbang freegan.',
				bullets: [
					'This is some text describing a cool service of the company',
					'This is some text describing a cool service of the company',
					'This is some text describing a cool service of the company'
				],
				images: {
					image1: {
						stats: await optimize('./static/images/featureImage1.jpg', { widths: [400, 800] }),
						alt: 'feature 1'
					},
					image2: {
						stats: await optimize('./static/images/featureImage2.jpg', { widths: [400, 800] }),
						alt: 'feature 2'
					},
					image3: {
						stats: await optimize('./static/images/featureImage3.jpg', { widths: [400, 800] }),
						alt: 'feature 3'
					}
				}
			}
		},
		{
			component: 'FeatureGrid',
			data: {
				title: 'What we can do for you',
				features: [
					{
						title: 'This is some text describing a cool service of the company',
						content: `Jean shorts ethical jawn cliche vaporware typewriter whatever mlkshk master cleanse marfa mixtape
				sriracha lyft. Marxism gastropub microdosing woke asymmetrical tattooed kale chips poutine sartorial
				bespoke la croix.`
					},
					{
						title: 'This is some text describing a cool service of the company',
						content: `Jean shorts ethical jawn cliche vaporware typewriter whatever mlkshk master cleanse marfa mixtape
				sriracha lyft. Marxism gastropub microdosing woke asymmetrical tattooed kale chips poutine sartorial
				bespoke la croix.`
					},
					{
						title: 'This is some text describing a cool service of the company',
						content: `Jean shorts ethical jawn cliche vaporware typewriter whatever mlkshk master cleanse marfa mixtape
				sriracha lyft. Marxism gastropub microdosing woke asymmetrical tattooed kale chips poutine sartorial
				bespoke la croix.`
					},
					{
						title: 'This is some text describing a cool service of the company',
						content: `Jean shorts ethical jawn cliche vaporware typewriter whatever mlkshk master cleanse marfa mixtape
				sriracha lyft. Marxism gastropub microdosing woke asymmetrical tattooed kale chips poutine sartorial
				bespoke la croix.`
					}
				]
			}
		},
		{
			component: 'RightTextWithImage',
			data: {
				title: 'We have the best experts in the industry',
				text: 'Etsy roof party hashtag, iceland gochujang sus copper mug palo santo. Mumblecore wayfarers tofu vice pinterest roof party swag cliche 8-bit bodega boys live-edge mukbang freegan.',
				bullets: [
					'This is some text describing a cool service of the company',
					'This is some text describing a cool service of the company',
					'This is some text describing a cool service of the company'
				],
				image: {
					stats: await optimize('./static/images/featureImage1.jpg', { widths: [400, 800, 1600] }),
					alt: 'feature 1'
				}
			}
		},
		{
			component: 'TestimonialsTextWithAvatar',
			data: {
				title: 'What our clients say',
				testimonials: [
					{
						name: 'Mary Jason',
						position: 'CEO of Mary Creatives',
						image: {
							stats: await optimize('./static/images/people/joel.jpg', { widths: [160] }),
							alt: 'Mary Jason'
						},
						content: `I'm baby hexagon tote bag marfa 8-bit. Put a bird on it mustache craft beer meditation.
				Shoreditch before they sold out jawn succulents keytar, freegan wolf irony. Bicycle rights
				portland tbh cupping shabby chic.`
					},
					{
						name: 'Joel Hanson',
						position: 'CEO of Joel Creatives',
						image: {
							stats: await optimize('./static/images/people/ransford.jpg', { widths: [160] }),
							alt: 'Joel Hanson'
						},
						content: `I'm baby hexagon tote bag marfa 8-bit. Put a bird on it mustache craft beer meditation.
				Shoreditch before they sold out jawn succulents keytar, freegan wolf irony. Bicycle rights
				portland tbh cupping shabby chic.`
					},
					{
						name: 'July Harrison',
						position: 'CEO of July Creatives',
						image: {
							stats: await optimize('./static/images/people/toa.jpg', { widths: [160] }),
							alt: 'July Harrison'
						},
						content: `I'm baby hexagon tote bag marfa 8-bit. Put a bird on it mustache craft beer meditation.
				Shoreditch before they sold out jawn succulents keytar, freegan wolf irony. Bicycle rights
				portland tbh cupping shabby chic.`
					}
				]
			}
		},
		{
			component: 'FaqClassic',
			data: {
				title: 'Good to know',
				faqs: [
					{
						title: 'Can I change the content of my website by my own?',
						content:
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus aperiam, aliquid reprehenderit maxime rerum praesentium temporibus quas laudantium alias in nesciunt veniam ex sint nisi iure, ab corporis debitis!'
					},
					{
						title: 'Do you use Wordpress for the website?',
						content:
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus aperiam, aliquid reprehenderit maxime rerum praesentium temporibus quas laudantium alias in nesciunt veniam ex sint nisi iure, ab corporis debitis!'
					},
					{
						title: 'How much does the website cost?',
						content:
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus aperiam, aliquid reprehenderit maxime rerum praesentium temporibus quas laudantium alias in nesciunt veniam ex sint nisi iure, ab corporis debitis!'
					}
				]
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
