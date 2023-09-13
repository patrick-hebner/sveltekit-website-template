<script>
	import Container from '../base/Container.svelte';
	import Link from '../base/Link.svelte';
	import Section from '../base/Section.svelte';
	import Spacer from '../base/Spacer.svelte';
</script>

<Section tag="footer">
	<Spacer size="small" />
	<Container classes="flex flex-col justify-center text-center gap-4">
		<div class="text-xl text-primary-500">Logo</div>
		<nav class="flex justify-center gap-10">
			<Link href="/services">Services</Link>
			<Link href="/about">About</Link>
			<Link href="/contact">Contact</Link>
		</nav>
	</Container>
	<Spacer size="small" />
</Section>
