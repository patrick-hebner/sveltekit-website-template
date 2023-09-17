<script>
	import Logo from '$lib/components/base/Logo.svelte';
	import Section from '$lib/components/base/Section.svelte';
	import HeaderNav from '$lib/components/headers/HeaderNav.svelte';
</script>

<Section
	tag="header"
	classes="flex items-center justify-between fixed z-50 bg-base
    w-full h-16 px-6 shadow-[inset_0_-2px_0_rgb(var(--color-primary-50))]"
>
	<Logo />
	<HeaderNav />
</Section>
