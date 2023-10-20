<script>
	import Container from '$lib/components/base/Container.svelte';
	import Logo from '$lib/components/base/Logo.svelte';
	import Link from '$lib/components/base/Link.svelte';
	import Section from '$lib/components/base/Section.svelte';
	import Spacer from '$lib/components/base/Spacer.svelte';
	import LegalRow from './LegalRow.svelte';
</script>

<Section tag="footer">
	<Spacer size="small" />
	<Container classes="flex flex-col justify-center items-center gap-4">
		<Logo />
		<nav class="flex justify-center gap-10">
			<Link href="/services">Services</Link>
			<Link href="/about">About</Link>
			<Link href="/contact">Contact</Link>
		</nav>
		<LegalRow />
	</Container>
</Section>
