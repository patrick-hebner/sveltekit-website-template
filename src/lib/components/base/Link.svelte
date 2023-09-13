<script lang="ts">
	export let href: string;
</script>

<a
	{href}
	class="underline decoration-transparent decoration-2 underline-offset-8 transition-all
    hover:decoration-primary-500 hover:underline-offset-4"><slot /></a
>
