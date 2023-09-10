<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let classes = '';
</script>

<div class={cn('max-w-8xl mx-auto px-6 ms:px-10 md:px-20', classes)}>
	<slot />
</div>
