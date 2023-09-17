<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { ChevronRight } from 'lucide-svelte';
	import { slide } from 'svelte/transition';
	import { getAccordionOptions } from './context';

	export let open = false;
	const itemId = crypto.randomUUID();
	const { collapse, activeItem } = getAccordionOptions();

	function setActive(): void {
		$activeItem = itemId;
	}

	function toggleOpen(): void {
		open = !open;
	}

	function handleClick(): void {
		collapse ? setActive() : toggleOpen();
	}

	$: open && collapse && setActive();
	$: isActive = $activeItem === itemId;
	$: isOpen = collapse ? isActive : open;
</script>

<div class="w-full p-2">
	<button
		on:click={handleClick}
		class="w-full flex justify-between"
		aria-expanded={isOpen}
		aria-controls="accordion-{itemId}"
		><div class="flex-shrink-0"><slot name="title" /></div>
		<div
			class={cn('flex-shrink-0 transition-transform', {
				'rotate-90': isOpen
			})}
		>
			<slot name="icon"><ChevronRight /></slot>
		</div></button
	>
	{#if isOpen}
		<div
			class="mb-4"
			transition:slide|local
			role="region"
			aria-labelledby="accordion-{itemId}"
			aria-hidden={!isOpen}
		>
			<slot name="content" />
		</div>
	{/if}
</div>
