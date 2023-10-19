import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const heroClassicSmall = {
		title: 'Our Team',
		subtitle:
			'We are experienced team of motivated experts located around the world. We have a ton of practical experience in product strategy, UI/UX design and software development.',

		image: {
			src: '/images/hero-team.jpg',
			alt: 'Hero'
		}
	};

	const teamMembersGrid = {
		members: [
			{
				name: 'Franky Bloom',
				occupation: 'CEO',

				image: {
					src: '/images/people/ayo.jpg'
				}
			},
			{
				name: 'Mika Harrison',
				occupation: 'CTO',

				image: {
					src: '/images/people/tyler.jpg'
				}
			},
			{
				name: 'John Heck',
				occupation: 'Developer',

				image: {
					src: '/images/people/cagle.jpg'
				}
			},
			{
				name: 'Lucy Miller',
				occupation: 'Designer',

				image: {
					src: '/images/people/july.jpg'
				}
			},
			{
				name: 'July Williams',
				occupation: 'Developer',

				image: {
					src: '/images/people/jeffery.jpg'
				}
			},
			{
				name: 'Jesse Davis',
				occupation: 'Marketing',

				image: {
					src: '/images/people/brooke.jpg'
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
