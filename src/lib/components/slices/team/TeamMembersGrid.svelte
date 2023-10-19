<script lang="ts">
	import Container from '$lib/components/base/Container.svelte';
	import Heading from '$lib/components/base/Heading.svelte';
	import Section from '$lib/components/base/Section.svelte';
	import Spacer from '$lib/components/base/Spacer.svelte';
	import TextWithIconVertical from '$lib/components/feature/TextWithIconVertical.svelte';
	import TeamMemberRect from '$lib/components/team/TeamMemberCard.svelte';
	import { cn } from '$lib/utils/cn';
	import type { TeamGrid } from '../types';

	export let data: TeamGrid;
</script>

<Section classes="relative overflow-hidden">
	<Spacer />
	<Container classes="relative z-10">
		<div class={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-20')}>
			{#each data.members as member}
				<TeamMemberRect {member} />
			{/each}
		</div>
	</Container>
	<Spacer />
</Section>
