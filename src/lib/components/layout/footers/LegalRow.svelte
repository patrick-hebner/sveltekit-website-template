<script>
	import Section from '$lib/components/base/Section.svelte';
</script>

<Section classes="text-sm py-2 flex justify-between w-full">
	<div>© Copyright {new Date().getFullYear()}</div>
	<div class="flex gap-4">
		<a class="hover:opacity-50" href="/imprint">Imprint</a>
		<a class="hover:opacity-50" href="/privacy">Privacy Policy</a>
	</div>
</Section>
