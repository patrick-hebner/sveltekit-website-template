<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let type: 'submit' | 'button' = 'button';
	export let variant: 'small' | 'default' | 'large' | 'huge' = 'default';
	export let inverted = false;
	export let classes = '';
</script>

<button
	{type}
	on:click
	class={cn(
		`group transition-colors bg-primary-400 hover:bg-primary-500 font-bold text-lg 
		 flex relative z-0 py-2 px-4 rounded-sm h-fit w-fit justify-center`,
		classes,
		{
			'text-md px-2': variant === 'small' && !inverted,
			'text-2xl px-10 font-bold': variant === 'large' && !inverted,
			'text-3xl px-16 font-bold': variant === 'huge' && !inverted,
			'text-md px-2 bg-base hover:bg-primary-50 text-base': variant === 'small' && inverted,
			'text-2xl px-10 font-bold bg-base hover:bg-primary-50 text-base':
				variant === 'large' && inverted,
			'text-base text-3xl px-16 font-bold bg-base hover:bg-primary-50':
				variant === 'huge' && inverted
		}
	)}><slot /></button
>
