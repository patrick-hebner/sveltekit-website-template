import CtaBanner from '$lib/components/slices/callouts/CtaBanner.svelte';
import FaqClassic from '$lib/components/slices/faq/FaqClassic.svelte';
import FeatureGrid from '$lib/components/slices/features/FeatureGrid.svelte';
import LeftTextWithMultipleImages from '$lib/components/slices/features/LeftTextWithMultipleImages.svelte';
import RightTextWithImage from '$lib/components/slices/features/RightTextWithImage.svelte';
import FeatureListImageText from '$lib/components/slices/features/FeatureListImageText.svelte';
import HeroClassic from '$lib/components/slices/hero/HeroClassic.svelte';
import HeroClassicSmall from '$lib/components/slices/hero/HeroClassicSmall.svelte';
import StaticCompaniesBanner from '$lib/components/slices/social-proof/StaticCompaniesBanner.svelte';
import TestimonialsTextWithAvatar from '$lib/components/slices/social-proof/TestimonialsTextWithAvatar.svelte';
import SingleTestimonialTextWithAvatar from '$lib/components/slices/social-proof/SingleTestimonialTextWithAvatar.svelte';
import TeamMembersGrid from '$lib/components/slices/team/TeamMembersGrid.svelte';

export const components = {
	CtaBanner: CtaBanner,
	FaqClassic: FaqClassic,
	FeatureGrid: FeatureGrid,
	LeftTextWithMultipleImages: LeftTextWithMultipleImages,
	RightTextWithImage: RightTextWithImage,
	FeatureListImageText: FeatureListImageText,
	HeroClassic: HeroClassic,
	StaticCompaniesBanner: StaticCompaniesBanner,
	TestimonialsTextWithAvatar: TestimonialsTextWithAvatar,
	HeroClassicSmall: HeroClassicSmall,
	SingleTestimonialTextWithAvatar: SingleTestimonialTextWithAvatar,
	TeamMembersGrid: TeamMembersGrid
};

export function component(comp: string) {
	return components[comp as keyof typeof components];
}
