<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let eager = false;
	export let alt = '';
	export let src = '';
	export let width = '';
	export let height = '';
	export let cover = false;
	export let classes = '';
</script>

<img
	{src}
	{alt}
	{width}
	{height}
	loading={eager ? 'eager' : 'lazy'}
	decoding="async"
	class={cn('max-w-full h-auto block object-center', classes, {
		'w-full h-full object-cover ': cover
	})}
/>
