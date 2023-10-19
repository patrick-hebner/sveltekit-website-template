<script lang="ts">
	import Heading from '$lib/components/base/Heading.svelte';
	import Text from '$lib/components/base/Text.svelte';
	import Image from '../base/Image.svelte';
	import { cn } from '$lib/utils/cn';

	export let image: {
		src: string;
		alt: string;
	};
	export let name = '';
	export let position = '';
	export let centered = false;
</script>

<div class={cn('relative flex flex-col gap-4', { 'items-center': centered })}>
	<div
		class={cn('text-7xl font-bold text-primary-200 absolute -left-4 -top-4 z-0', {
			'left-1/2 -translate-x-1/2 text-9xl': centered
		})}
	>
		"
	</div>
	<Text classes={cn('relative z-10')}><slot /></Text>
	<div class="flex gap-4 items-center">
		<div class="w-20 h-20 flex-shrink-0 ring-2 ring-primary-600 rounded-full">
			<Image src={image.src} alt={image.alt} cover classes="rounded-full grayscale " />
		</div>
		<div>
			<Heading variant="xs" level="h3">{name}</Heading>
			<Text tag="p">{position}</Text>
		</div>
	</div>
</div>
