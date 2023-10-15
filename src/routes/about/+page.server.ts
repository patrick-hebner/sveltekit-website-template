import { optimize } from '$lib/utils/optimizeImage';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const slices = [
		{
			component: 'HeroClassicSmall',
			data: {
				title: 'Our Team',
				subtitle:
					'We are experienced team of motivated experts located around the world. We have a ton of practical experience in product strategy, UI/UX design and software development.',

				image: {
					stats: await optimize('./static/images/hero-team.jpg'),
					alt: 'Hero'
				}
			}
		},

		{
			component: 'TeamMembersGrid',
			data: {
				members: [
					{
						name: 'Franky Bloom',
						occupation: 'CEO',

						image: {
							stats: await optimize('./static/images/people/ayo.jpg', {
								widths: [400, 800, 1600]
							})
						}
					},
					{
						name: 'Mika Harrison',
						occupation: 'CTO',

						image: {
							stats: await optimize('./static/images/people/tyler.jpg', {
								widths: [400, 800, 1600]
							})
						}
					},
					{
						name: 'John Heck',
						occupation: 'Developer',

						image: {
							stats: await optimize('./static/images/people/cagle.jpg', {
								widths: [400, 800, 1600]
							})
						}
					},
					{
						name: 'Lucy Miller',
						occupation: 'Designer',

						image: {
							stats: await optimize('./static/images/people/july.jpg', {
								widths: [400, 800, 1600]
							})
						}
					},
					{
						name: 'July Williams',
						occupation: 'Developer',

						image: {
							stats: await optimize('./static/images/people/jeffery.jpg', {
								widths: [400, 800, 1600]
							})
						}
					},
					{
						name: 'Jesse Davis',
						occupation: 'Marketing',

						image: {
							stats: await optimize('./static/images/people/brooke.jpg', {
								widths: [400, 800, 1600]
							})
						}
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
					link: '/contact'
				}
			}
		}
	];
	return {
		seo: {
			title: 'About',
			description: 'Metadescription for about page'
		},
		slices
	};
};
