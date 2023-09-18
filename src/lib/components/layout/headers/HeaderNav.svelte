<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import HeaderNavItem from './HeaderNavItem.svelte';
	import { isMobileMenuViewport, mobileMenu } from '$lib/stores/mobileMenu';
	import { clickOutside } from '$lib/actions/click-outside';
	import { Menu, X } from 'lucide-svelte';

	const mobileClasses =
		'absolute flex-col bg-base w-full h-auto left-0 top-16 gap-8 overflow-hidden grid';
	const mobileClassesClosed = `${mobileClasses} grid-rows-[0fr] pointer-events-none`;
	const mobileClassesOpen = `${mobileClasses} grid-rows-[1fr]`;
</script>

<div class="items-center flex md:hidden">
	{#if $mobileMenu}
		<button on:click={mobileMenu.close}><X /></button>
	{:else}
		<button on:click={mobileMenu.open}><Menu /></button>
	{/if}
</div>
<nav
	use:clickOutside={mobileMenu.close}
	class={cn('flex items-center h-full transition-all ', {
		[mobileClassesClosed]: $isMobileMenuViewport && !$mobileMenu,
		[mobileClassesOpen]: $isMobileMenuViewport && $mobileMenu
	})}
>
	<div
		class={cn('flex h-full', {
			'overflow-hidden block h-auto': $isMobileMenuViewport
		})}
	>
		<HeaderNavItem href="/services">Services</HeaderNavItem>
		<HeaderNavItem href="/about">About</HeaderNavItem>
		<HeaderNavItem href="/contact">Contact</HeaderNavItem>
	</div>
</nav>
