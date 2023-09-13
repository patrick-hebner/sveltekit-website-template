<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let id = '';
	export let tag: 'header' | 'footer' | 'section' = 'section';
	export let classes = '';
</script>

<svelte:element this={tag} {id} class={cn('relative', classes)}>
	<slot />
</svelte:element>
