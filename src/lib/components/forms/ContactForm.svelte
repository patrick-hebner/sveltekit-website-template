<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import type { SubmitFunction } from '@sveltejs/kit';
	import Button from '../base/Button.svelte';
	import Input from './Input.svelte';
	import Textarea from './Textarea.svelte';
	import Honeypot from './Honeypot.svelte';
	import { PUBLIC_EMAIL } from '$env/static/public';
	import ButtonLink from '../base/ButtonLink.svelte';

	let loading = false;
	let serverError = false;

	$: form = $page.form;

	function mailto() {
		const url = `mailto:${PUBLIC_EMAIL}`;
		location.href = url;
	}

	const sendMessage: SubmitFunction = ({ formElement }) => {
		loading = true;
		serverError = false;
		return async ({ update, result }) => {
			await update();
			loading = false;
			if (result.type === 'success') {
				formElement.reset();
			}
			if (result.type === 'failure' && result.status === 500) {
				formElement.reset();
				serverError = true;
			}
		};
	};
</script>

<form class="grid gap-2" method="post" action="?/sendMessage" use:enhance={sendMessage}>
	<div class="grid grid-cols-2 gap-4">
		<Input name="firstname" error={form?.errors?.firstname} value={form?.data?.firstname}
			>First Name</Input
		>
		<Input name="lastname" error={form?.errors?.lastname} value={form?.data?.lastname}
			>Last Name</Input
		>
	</div>
	<Input name="email" type="email" error={form?.errors?.email} value={form?.data?.email}
		>E-Mail</Input
	>
	<Textarea name="message" error={form?.errors?.message} value={form?.data?.message}
		>Message</Textarea
	>
	<Honeypot name="content" />
	<Button classes="w-full {loading && 'animate-pulse'}" type="submit"
		>{loading ? 'Loading ...' : 'Send'}</Button
	>
</form>
{#if form?.success}
	<div class="py-4 px-4 mt-10 ring-2 ring-green-500 rounded-sm">Successfully submitted!</div>
{/if}
{#if serverError}
	<div class="py-4 px-4 mt-10 ring-2 ring-red-500 rounded-sm">
		An error occured. Cannot send message.
	</div>
{/if}
<div class="mt-10 block text-center">
	<ButtonLink on:click={mailto}>or send us and e-mail</ButtonLink>
</div>
