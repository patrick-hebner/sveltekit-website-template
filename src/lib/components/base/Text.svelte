<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let classes: string = '';
	export let tag = 'span';
	export let variant: 'default' | 'large' = 'default';
</script>

<svelte:element
	this={tag}
	class={cn('font-light text-md font-sans text-text-color', classes, {
		'text-xl': variant === 'large'
	})}
>
	<slot />
</svelte:element>

<style>
</style>
