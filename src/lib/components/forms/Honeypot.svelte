<script lang="ts">
	export let name: string;
</script>

<div class="flex flex-col gap-1 h-[0.5px] overflow-hidden">
	<input type="hidden" name="initTime" value={Date.now()} tabindex="-1" />
	<input {name} id={name} value="" tabindex="-1" />

	<label for={name}>Bot Protection</label>
</div>
