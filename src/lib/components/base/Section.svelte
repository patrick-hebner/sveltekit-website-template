<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let id = '';
	export let classes = '';
</script>

<section {id} class={cn('relative', classes)}>
	<slot />
</section>
