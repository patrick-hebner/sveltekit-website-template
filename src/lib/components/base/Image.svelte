<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Metadata, MetadataEntry } from '@11ty/eleventy-img';

	export let lazy = true;
	export let alt = '';
	export let stats: Metadata;
	export let sizes = '';
	export let cover = false;
	export let classes = '';
	export let pictureClasses = '';
	$: sources = Object.keys(stats).map((key) => {
		const imgConfig = stats[key as keyof typeof stats];

		return {
			type: `image/${key}`,
			srcset: imgConfig && imgConfig.map((entry) => `${entry.url} ${entry.width}w`).join(',')
		};
	});
	$: defaultImg = stats.jpeg && stats.jpeg[stats.jpeg.length - 1];
</script>

<picture class={cn('overflow-hidden', pictureClasses)}>
	{#each sources as source}
		<source type={source.type} srcset={source.srcset} {sizes} />
	{/each}
	<img
		src={defaultImg?.url}
		{alt}
		width={defaultImg?.width}
		height={defaultImg?.height}
		loading={lazy ? 'lazy' : 'eager'}
		decoding="async"
		class={cn('max-w-full h-auto block object-center', classes, {
			'w-full h-full object-cover ': cover
		})}
	/>
</picture>
