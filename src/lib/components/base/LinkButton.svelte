<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let target = '_self';
	export let href: string = '';
	export let variant: 'small' | 'default' | 'large' = 'default';
	export let inverted = false;
	export let classes = '';
</script>

<a
	{href}
	{target}
	rel={target === '_blank' ? 'noopener noreferrer' : null}
	class={cn(
		'group transition-colors bg-primary-400 hover:bg-primary-500 font-bold text-lg flex relative z-0 py-2 px-4 rounded-sm h-fit w-fit',
		classes,
		{
			'text-md px-2': variant === 'small',
			'text-2xl px-10 font-black': variant === 'large',
			'bg-base hover:bg-primary-50 text-base': inverted
		}
	)}><slot /></a
>
