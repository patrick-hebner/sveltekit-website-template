<script lang="ts">
	import { cn } from '$lib/utils/cn';
	export let size: 'small' | 'default' | 'large' = 'default';
</script>

<div
	class={cn('', sizeClasses, classes, {
		'h-10': size === 'small',
		'h-20': size === 'default',
		'h-40': size === 'large'
	})}
/>
