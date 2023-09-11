<script>
	import Heading from '$lib/components/base/Heading.svelte';
	import Text from '$lib/components/base/Text.svelte';

	export let imageUrl = '';
	export let name = '';
	export let position = '';
</script>

<div class="relative flex flex-col gap-4">
	<div class="text-7xl font-bold text-primary-200 absolute -left-4 -top-4 z-0">"</div>
	<Text classes="relative z-10"><slot /></Text>
	<div class="flex gap-4 items-center">
		<div class="w-20 h-20 flex-shrink-0">
			<img
				src={imageUrl}
				alt="company logo"
				class="h-full w-full object-cover rounded-full ring-2 ring-primary-500"
			/>
		</div>
		<div>
			<Heading variant="sm" level="h4">{name}</Heading>
			<Text tag="p">{position}</Text>
		</div>
	</div>
</div>
