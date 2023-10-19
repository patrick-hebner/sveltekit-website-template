<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import HeaderNavItem from './HeaderNavItem.svelte';
	import { mobileMenu } from '$lib/stores/mobileMenu';
	import { clickOutside } from '$lib/actions/click-outside';
	import { Menu, X } from 'lucide-svelte';
</script>

<div class="flex items-center md:hidden relative z-10">
	{#if $mobileMenu}
		<button aria-label="Close menu" on:click={mobileMenu.close}><X /></button>
	{:else}
		<button aria-label="Open menu" on:click={mobileMenu.open}><Menu /></button>
	{/if}
</div>
<nav
	use:clickOutside={mobileMenu.close}
	class={cn(
		`absolute z-10 left-0 top-16 w-full bg-base md:bg-transparent grid md:flex md:static 
		md:justify-end md:items-center md:h-full transition-all `,
		{
			'grid-rows-[0fr] pointer-events-none md:pointer-events-auto': !$mobileMenu,
			'grid-rows-[1fr] border-b-2 border-primary-600': $mobileMenu
		}
	)}
>
	<div class={cn('flex flex-col w-full h-full md:flex-row md:justify-end overflow-hidden ')}>
		<HeaderNavItem href="/services">Services</HeaderNavItem>
		<HeaderNavItem href="/about">About</HeaderNavItem>
		<HeaderNavItem href="/contact">Contact</HeaderNavItem>
	</div>
</nav>
