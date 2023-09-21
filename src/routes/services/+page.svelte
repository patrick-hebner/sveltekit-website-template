<script>
	import Spacer from '$lib/components/base/Spacer.svelte';
	import HeroClassicSmall from '$lib/components/slices/hero/HeroClassicSmall.svelte';
</script>

<HeroClassicSmall imageUrl="/images/hero-services.jpg">
	<svelte:fragment slot="title">Our Services</svelte:fragment>
	<svelte:fragment slot="subtitle"
		>You need support from the idea to the launch of your new digital product. As a full service
		product agency we help you with all aspects of product development.
	</svelte:fragment>
</HeroClassicSmall>
