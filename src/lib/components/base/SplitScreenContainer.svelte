<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let toRightEdge = false;
	export let toLeftEdge = false;
	export let classes = '';
</script>

<div
	class={cn(
		`grid grid-cols-1 px-6 md:p-0
		md:grid-cols-[minmax(1.5rem,_1fr)_minmax(0,calc((var(--size-container)-3rem)/2))_minmax(0,calc((var(--size-container)-3rem)/2))_minmax(1.5rem,_1fr)],
		md:grid-cols-[minmax(5rem,_1fr)_minmax(0,calc((var(--size-container)-10rem)/2))_minmax(0,calc((var(--size-container)-10rem)/2))_minmax(5rem,_1fr)]`,
		classes
	)}
>
	<div
		class={cn('relative md:col-start-2 md:col-end-3', {
			'md:col-start-1 md:col-end-3': toLeftEdge
		})}
	>
		<slot name="left" />
	</div>
	<div
		class={cn('relative md:col-start-3 md:col-end-4', {
			'md:col-start-3 md:col-end-5': toRightEdge
		})}
	>
		<slot name="right" />
	</div>
</div>
