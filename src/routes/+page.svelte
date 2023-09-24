<script lang="ts">
	import { components } from '$lib/utils/componentsMapping.js';

	function getComponent(comp: string) {
		return components[comp as keyof typeof components];
	}

	export let data;
</script>

{#each data.slices as slice}
	<svelte:component this={getComponent(slice.component)} data={slice.data} />
{/each}
