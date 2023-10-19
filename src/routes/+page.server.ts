import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const heroClassic = {
		title: 'We create the digital products of tomorrow',
		subtitle:
			'Etsy roof party hashtag, iceland gochujang sus copper mug palo santo. Mumblecore wayfarers tofu vice pinterest roof party swag cliche 8-bit bodega boys live-edge mukbang freegan.',
		cta: {
			title: "Let's build together",
			link: '/contact'
		},
		image: {
			src: '/images/hero.webp',
			alt: 'Hero'
		}
	};
	const staticCompaniesBanner = {
		title: 'We work with top notch companies around the globe',
		logos: [
			{ src: '/images/companies/LogoMock.svg', alt: '' },
			{ src: '/images/companies/LogoMock.svg', alt: '' },
			{ src: '/images/companies/LogoMock.svg', alt: '' },
			{ src: '/images/companies/LogoMock.svg', alt: '' },
			{ src: '/images/companies/LogoMock.svg', alt: '' },
			{ src: '/images/companies/LogoMock.svg', alt: '' }
		]
	};
	const leftTextWithMultipleImages = {
		title: 'We have the best experts in the industry',
		text: 'Etsy roof party hashtag, iceland gochujang sus copper mug palo santo. Mumblecore wayfarers tofu vice pinterest roof party swag cliche 8-bit bodega boys live-edge mukbang freegan.',
		bullets: [
			'This is some text describing a cool service of the company',
			'This is some text describing a cool service of the company',
			'This is some text describing a cool service of the company'
		],
		images: {
			image1: {
				src: '/images/featureImage1.webp',
				alt: 'feature 1'
			},
			image2: {
				src: '/images/featureImage2.webp',
				alt: 'feature 2'
			},
			image3: {
				src: '/images/featureImage3.webp',
				alt: 'feature 3'
			}
		}
	};
	const featureGrid = {
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
	};
	const rightTextWithImage = {
		title: 'We have the best experts in the industry',
		text: 'Etsy roof party hashtag, iceland gochujang sus copper mug palo santo. Mumblecore wayfarers tofu vice pinterest roof party swag cliche 8-bit bodega boys live-edge mukbang freegan.',
		bullets: [
			'This is some text describing a cool service of the company',
			'This is some text describing a cool service of the company',
			'This is some text describing a cool service of the company'
		],
		image: {
			src: '/images/featureImage1.webp',
			alt: 'feature 1'
		}
	};
	const testimonialsTextWithAvatar = {
		title: 'What our clients say',
		testimonials: [
			{
				name: 'Mary Jason',
				position: 'CEO of Mary Creatives',
				image: {
					src: '/images/people/joel.webp',
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
					src: '/images/people/ransford.webp',
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
					src: '/images/people/toa.webp',
					alt: 'July Harrison'
				},
				content: `I'm baby hexagon tote bag marfa 8-bit. Put a bird on it mustache craft beer meditation.
				Shoreditch before they sold out jawn succulents keytar, freegan wolf irony. Bicycle rights
				portland tbh cupping shabby chic.`
			}
		]
	};
	const faqClassic = {
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
			description: 'Metadescription for home page'
		},
		heroClassic,
		staticCompaniesBanner,
		leftTextWithMultipleImages,
		featureGrid,
		rightTextWithImage,
		testimonialsTextWithAvatar,
		faqClassic,
		ctaBanner
	};
};
