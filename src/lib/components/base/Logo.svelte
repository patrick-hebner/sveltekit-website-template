<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let href = '/';
	export let classes = '';
</script>

<a {href} class={cn('text-primary-600 w-fit h-fit', classes)}>
	<svg width="46" height="34" viewBox="0 0 46 34" fill="none" xmlns="http://www.w3.org/2000/svg">
		<title>Logo</title>
		<path d="M46 0H30L0 34H16L46 0Z" fill="currentColor" />
		<path
			d="M38 34C42.4183 34 46 30.5206 46 26.2286C46 21.9365 42.4183 18.4571 38 18.4571C33.5817 18.4571 30 21.9365 30 26.2286C30 30.5206 33.5817 34 38 34Z"
			fill="currentColor"
		/>
	</svg>
</a>
