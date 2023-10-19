import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const heroClassicSmall = {
		title: 'Our Team',
		subtitle:
			'We are experienced team of motivated experts located around the world. We have a ton of practical experience in product strategy, UI/UX design and software development.',

		image: {
			src: '/images/hero-team.webp',
			alt: 'Hero'
		}
	};

	const teamMembersGrid = {
		members: [
			{
				name: 'Franky Bloom',
				occupation: 'CEO',

				image: {
					src: '/images/people/ayo.webp'
				}
			},
			{
				name: 'Mika Harrison',
				occupation: 'CTO',

				image: {
					src: '/images/people/tyler.webp'
				}
			},
			{
				name: 'John Heck',
				occupation: 'Developer',

				image: {
					src: '/images/people/cagle.webp'
				}
			},
			{
				name: 'Lucy Miller',
				occupation: 'Designer',

				image: {
					src: '/images/people/july.webp'
				}
			},
			{
				name: 'July Williams',
				occupation: 'Developer',

				image: {
					src: '/images/people/jeffery.webp'
				}
			},
			{
				name: 'Jesse Davis',
				occupation: 'Marketing',

				image: {
					src: '/images/people/brooke.webp'
				}
			}
		]
	};

	const ctaBanner = {
		title: "Convinced?<br /> Let's start a project!",
		cta: {
			title: 'Contact Us!',
			link: '/contact'
		}
	};
	return {
		seo: {
			title: 'About',
			description: 'Metadescription for about page'
		},
		heroClassicSmall,
		teamMembersGrid,
		ctaBanner
	};
};
