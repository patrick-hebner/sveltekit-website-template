<script lang="ts">
	import CtaBanner from '$lib/components/slices/callouts/CtaBanner.svelte';
	import TeamMembersGrid from '$lib/components/slices/team/TeamMembersGrid.svelte';
	import HeroClassicSmall from '$lib/components/slices/hero/HeroClassicSmall.svelte';

	export let data;

	export const components = {
		CtaBanner: CtaBanner,
		TeamMembersGrid: TeamMembersGrid,
		HeroClassicSmall: HeroClassicSmall
	};
	function component(comp: string) {
		return components[comp as keyof typeof components];
	}
</script>

<HeroClassicSmall data={data.heroClassicSmall} />
<TeamMembersGrid data={data.teamMembersGrid} />
<CtaBanner data={data.ctaBanner} />
