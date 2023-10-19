<script>
	import { BadgeCheck } from 'lucide-svelte';
	import Text from '$lib/components/base/Text.svelte';
</script>

<div class="flex gap-4 items-center">
	<BadgeCheck size="32" class="text-primary-600 flex-shrink-0" />
	<Text variant="large"><slot /></Text>
</div>
