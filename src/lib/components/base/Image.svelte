<script lang="ts">
	import type { Metadata, MetadataEntry } from '@11ty/eleventy-img';

	export let lazy = true;
	export let alt = '';
	export let stats: Metadata;
	export let sizes = '';
	export let cover = false;
	$: sources = Object.keys(stats).map((key) => {
		const imgConfig = stats[key as keyof typeof stats];

		return {
			type: `image/${key}`,
			srcset: imgConfig && imgConfig.map((entry) => `${entry.url} ${entry.width}w`).join(',')
		};
	});
	$: defaultImg = stats.jpeg && stats.jpeg[stats.jpeg.length - 1];
</script>

<picture>
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
		class:cover
	/>
</picture>

<style>
	img {
		max-width: 100%;
		height: auto;
	}
	img.cover {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}
</style>
