<script lang="ts">
	import Heading from '$lib/components/base/Heading.svelte';
	import Text from '$lib/components/base/Text.svelte';
	import Image from '../base/Image.svelte';
	import { cn } from '$lib/utils/cn';

	export let member: {
		name: string;
		occupation: string;
		image: {
			src: string;
			alt?: string;
		};
	};
</script>

<div class={cn('relative flex flex-col gap-4')}>
	<div class="flex flex-col gap-4">
		<div class="w-full h-auto aspect-square flex-shrink-0 ring-4 ring-primary-600 rounded-xl">
			<Image
				src={member.image.src}
				alt={member.image.alt ?? member.name}
				cover
				classes="grayscale rounded-xl"
			/>
		</div>
		<div>
			<Heading variant="sm" level="h4" classes="text-primary-600">{member.name}</Heading>
			<Text tag="p">{member.occupation}</Text>
		</div>
	</div>
</div>
