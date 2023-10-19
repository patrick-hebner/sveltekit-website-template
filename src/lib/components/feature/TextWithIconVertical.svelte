<script>
	import { BadgeCheck } from 'lucide-svelte';
	import Text from '$lib/components/base/Text.svelte';
</script>

<div class="flex gap-4 text-inverted">
	<div class="flex flex-col items-center gap-4">
		<BadgeCheck size="32" class="text-primary-100 flex-shrink-0 mt-1" />
		<div class="w-[2px] h-full bg-gradient-to-b from-primary-100 to-transparent" />
	</div>
	<div>
		<slot name="title" />
		<Text classes="mt-2" tag="p"><slot /></Text>
	</div>
</div>
