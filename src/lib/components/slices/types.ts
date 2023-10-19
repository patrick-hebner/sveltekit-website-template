import type { FaqItem } from './faq/types';

export type SliceData = HeroClassic &
	HeroClassicSmall &
	StaticCompaniesBanner &
	LeftTextWithMultipleImages &
	FeatureGrid &
	RightTextWithImage &
	TestimonialsTextWithAvatar &
	SingleTestimonialTextWithAvatar &
	FaqClassic &
	CtaBanner;

export type Slices =
	| HeroClassic
	| HeroClassicSmall
	| StaticCompaniesBanner
	| LeftTextWithMultipleImages
	| FeatureGrid
	| FeatureListImageText
	| RightTextWithImage
	| TestimonialsTextWithAvatar
	| SingleTestimonialTextWithAvatar
	| FaqClassic
	| CtaBanner;

export type CtaBanner = {
	title: string;
	cta: {
		title: string;
		link: string;
	};
};

export type FaqClassic = {
	title: string;
	faqs: FaqItem[];
};

export type FeatureGrid = {
	title: string;
	threeColumns?: boolean;
	features: {
		title: string;
		content: string;
	}[];
};

export type FeatureListImageText = {
	features: {
		title: string;
		text: string;
		bullets?: string[];
		image: {
			src: string;
			alt: string;
		};
	}[];
};

export type LeftTextWithMultipleImages = {
	title: string;
	text: string;
	bullets: string[];
	images: {
		image1: {
			src: string;
			alt: string;
		};
		image2: {
			src: string;
			alt: string;
		};
		image3: {
			src: string;
			alt: string;
		};
	};
};

export type RightTextWithImage = {
	title: string;
	text: string;
	bullets?: string[];
	image: {
		src: string;
		alt: string;
	};
};

export type HeroClassic = {
	title: string;
	subtitle: string;
	cta: {
		title: string;
		link: string;
	};
	image: {
		src: string;
		alt: string;
	};
};

export type HeroClassicSmall = {
	title: string;
	subtitle: string;
	image: {
		src: string;
		alt: string;
	};
};

export type TestimonialsTextWithAvatar = {
	title: string;
	testimonials: {
		name: string;
		position: string;
		content: string;
		image: {
			src: string;
			alt: string;
		};
	}[];
};

export type SingleTestimonialTextWithAvatar = {
	title?: string;
	testimonial: {
		name: string;
		position: string;
		content: string;
		image: {
			src: string;
			alt: string;
		};
	};
};

export type StaticCompaniesBanner = {
	title: string;
	logos: {
		src: string;
		alt: string;
	}[];
};

export type TeamGrid = {
	members: {
		name: string;
		occupation: string;
		image: {
			src: string;
			alt?: string;
		};
	}[];
};

export type Contact = {
	title: string;
};
