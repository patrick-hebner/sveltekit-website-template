import type EleventyImage from '@11ty/eleventy-img';
import type { FaqItem } from './faq/types';

export type Slice<T> = {
	component: 'CtaBanner';
	data: T;
};

export type Slices = [Slice<CtaBanner>];

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
			stats: EleventyImage.Metadata;
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
			stats: EleventyImage.Metadata;
			alt: string;
		};
		image2: {
			stats: EleventyImage.Metadata;
			alt: string;
		};
		image3: {
			stats: EleventyImage.Metadata;
			alt: string;
		};
	};
};

export type RightTextWithImage = {
	title: string;
	text: string;
	bullets?: string[];
	image: {
		stats: EleventyImage.Metadata;
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
		stats: EleventyImage.Metadata;
		alt: string;
	};
};

export type HeroClassicSmall = {
	title: string;
	subtitle: string;
	cta: {
		title: string;
		link: string;
	};
	image: {
		stats: EleventyImage.Metadata;
		alt: string;
	};
};

export type SingleTestimonialTextWithAvatar = {
	title: string;
	testimonial: {
		name: string;
		position: string;
		content: string;
		image: {
			stats: EleventyImage.Metadata;
			alt: string;
		};
	};
};

export type StaticCompaniesBanner = {
	title: string;
	logos: {
		stats: EleventyImage.Metadata;
		alt: string;
	}[];
};

export type TeamGrid = {
	members: {
		name: string;
		occupation: string;
		image: {
			stats: EleventyImage.Metadata;
			alt?: string;
		};
	}[];
};
