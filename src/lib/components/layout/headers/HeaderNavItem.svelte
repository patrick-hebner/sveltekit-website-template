<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { page } from '$app/stores';

	export let href: string;
	export let active = false;
	$: active = $page.route.id === href;
</script>

<a
	{href}
	class={cn(
		`flex-shrink-0 text-base font-semibold h-auto flex items-center px-4 py-4 
	border-b-4 border-transparent hover:bg-primary-100 md:hover:border-primary-600 md:hover:bg-transparent
	`,

		{ 'text-primary-600 md:border-primary-600': active }
	)}><slot /></a
>
