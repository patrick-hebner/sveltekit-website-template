<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import type { SubmitFunction } from '@sveltejs/kit';
	import Button from '../base/Button.svelte';
	import Input from './Input.svelte';
	import Textarea from './Textarea.svelte';

	let loading = false;
	let serverError = false;

	$: form = $page.form;

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
	<Button classes="w-full {loading && 'animate-pulse'}" type="submit"
		>{loading ? 'Loading ...' : 'Send'}</Button
	>
</form>
{#if form?.success}
	<div class="py-4 px-10 mt-10 bg-green-200">Successfully submitted!</div>
{/if}
{#if serverError}
	<div class="py-4 px-10 mt-10 bg-red-200">An error occured. Cannot send message.</div>
{/if}
