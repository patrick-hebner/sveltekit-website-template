<script lang="ts">
	import { cn } from '$lib/utils/cn';
	type Variant = 'xl' | 'lg' | 'md' | 'sm' | 'xs' | '2xs' | '3xs';
	export let level: 'h1' | 'h2' | 'h3' | 'h4' = 'h2';
	export let variant: Variant = 'xl';
	export let classes = '';
</script>

<svelte:element
	this={level}
	class={cn('font-sans h-fit text-text-color', classes, {
		'font-bold text-5xl md:text-6xl lg:text-7xl xl:text-9xl': variant === 'xl',
		'font-bold  text-3xl md:text-4xl lg:text-5xl': variant === 'lg',
		'font-bold  text-2xl md:text-3xl lg:text-4xl': variant === 'md',
		'font-semibold text-xl md:text-2xl lg:text-3xl': variant === 'sm',
		'font-semibold text-lg md:text-xl lg:text-2xl': variant === 'xs',
		'font-semibold text-md md:text-lg lg:text-xl': variant === '2xs',
		'font-semibold text-sm md:text-md lg:text-lg': variant === '3xs'
	})}><slot /></svelte:element
>
