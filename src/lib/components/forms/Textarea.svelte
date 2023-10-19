<script lang="ts">
	export let name: string;
	export let value = '';
	export let error = '';
</script>

<div class="flex flex-col gap-1">
	<textarea
		{name}
		id={name}
		{value}
		class="peer order-2 outline outline-inverted outline-2 rounded-sm p-2 focus:outline-2 focus:outline-primary-600 h-40"
	/>
	<label for={name} class="text-sm peer-focus:text-primary-600"><slot /></label>
	<div class="order-3 text-xs text-red-600 h-4">
		{#if error}
			{error}
		{/if}
	</div>
</div>
