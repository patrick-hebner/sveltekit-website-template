<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { isMobileMenuViewport } from '$lib/stores/mobileMenu';
	import { page } from '$app/stores';

	export let href: string;
	export let active = false;
	$: console.log('>>>', $page.route);
	$: active = $page.route.id === href;
</script>

<a
	{href}
	class={cn(
		`flex-shrink-0 text-base font-semibold h-full flex items-center px-4 py-4 
	border-b-4 border-transparent hover:border-primary-500`,

		{ 'text-primary-500 border-primary-500': active, 'hover:bg-primary-100': $isMobileMenuViewport }
	)}><slot /></a
>
