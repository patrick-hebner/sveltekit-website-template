<script lang="ts">
	import { component, components } from '$lib/utils/componentsMapping.js';

	export let data;
</script>

{#each data.slices as slice}
	<svelte:component this={component(slice.component)} data={slice.data} />
{/each}
