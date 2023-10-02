<script lang="ts">
	import Container from '$lib/components/base/Container.svelte';
	import Spacer from '$lib/components/base/Spacer.svelte';
	import TextWithImage from '$lib/components/feature/TextWithImage.svelte';
	import type { FeatureListImageText } from '../types';

	export let data: FeatureListImageText;
</script>

<Spacer size="large" />
<Container classes="flex flex-col gap-16 lg:gap-24">
	{#each data.features as feature, i}
		<TextWithImage data={feature} inverted={i % 2 !== 0} />
	{/each}
</Container>
<Spacer size="large" />
