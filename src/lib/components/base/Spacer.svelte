<script lang="ts">
	import { cn } from '$lib/utils/cn';
	export let size: 'tiny' | 'small' | 'default' | 'large' = 'default';
	export let classes = '';
</script>

<div
	class={cn('', classes, {
		'h-4': size === 'tiny',
		'h-10': size === 'small',
		'h-20': size === 'default',
		'h-40': size === 'large'
	})}
/>
