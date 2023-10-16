<script lang="ts">
	import Button from '../base/Button.svelte';
	import Input from './Input.svelte';
	import Textarea from './Textarea.svelte';
	import Honeypot from './Honeypot.svelte';
	import { PUBLIC_EMAIL } from '$env/static/public';
	import ButtonLink from '../base/ButtonLink.svelte';
	import { tick } from 'svelte';
	import { zfd } from 'zod-form-data';
	import { z } from 'zod';

	type Form = {
		data?: Record<string, string>;
		errors?: Record<string, string>;
		success?: boolean;
	};

	let loading = false;
	let serverError = false;
	let formEl: HTMLFormElement;
	let form: Form = {};
	$: success = form && form.success;

	const contactSchema = zfd.formData({
		content: zfd.text(z.string().optional()),
		initTime: zfd.numeric(),
		firstname: zfd.text(),
		lastname: zfd.text(),
		email: zfd.text(),
		message: zfd.text(z.string().min(20).max(2000))
	});

	async function validate(formData: FormData) {
		const result = await contactSchema.safeParseAsync(formData);

		if (!result.success) {
			const errors = result?.error?.flatten().fieldErrors as Record<string, string>;

			const data: Form = {
				data: Object.fromEntries(formData) as Record<string, string>,
				errors: errors,
				success: false
			};

			return data;
		}
		return result;
	}

	function mailto() {
		const url = `mailto:${PUBLIC_EMAIL}`;
		location.href = url;
	}

	const sendMessage = async (event: Event) => {
		loading = true;
		serverError = false;
		form = {};

		const formElement = event.target as HTMLFormElement;
		const formData = new FormData(formElement);
		const result = await validate(formData);

		if (result.success) {
			//Send request to external form processor
			alert('Form sent to ' + formEl.action);
			formElement.reset();
		} else {
			form = result;
		}

		loading = false;
	};
</script>

<form
	bind:this={formEl}
	class="grid gap-2"
	method="post"
	action="/external/url"
	on:submit|preventDefault={sendMessage}
>
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
{#if success}
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
