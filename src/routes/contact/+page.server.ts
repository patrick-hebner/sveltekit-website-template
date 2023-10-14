import { optimize } from '$lib/utils/optimizeImage';
import { fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { zfd } from 'zod-form-data';
import { z } from 'zod';
import { contactMail, mailer } from '$lib/server/mail';

export const load: PageServerLoad = async () => {
	const slices = [
		{
			component: 'HeroClassicSmall',
			data: {
				title: 'Contact us',
				subtitle:
					'Do you need help creating your new digital product or would you like us to support you in the development of your current product? Just send us an email.',

				image: {
					stats: await optimize('./static/images/hero-contact.jpg'),
					alt: ''
				}
			}
		},
		{
			component: 'Contact',
			data: {
				title: 'Contact us'
			}
		}
	];
	return {
		slices
	};
};

export const actions: Actions = {
	sendMessage: async ({ request }) => {
		const formData = await request.formData();

		const contactSchema = zfd.formData({
			content: zfd.text(z.string().optional()),
			firstname: zfd.text(),
			lastname: zfd.text(),
			email: zfd.text(),
			message: zfd.text(z.string().min(20).max(2000))
		});
		const result = await contactSchema.safeParseAsync(formData);

		if (!result.success) {
			const data = {
				data: Object.fromEntries(formData),
				errors: result.error.flatten().fieldErrors
			};
			return fail(400, data);
		}
		if (isBot(result.data.content)) {
			return result;
		}

		try {
			await mailer.sendContactMail(result.data);
			return result;
		} catch (error) {
			return fail(500);
		}
	}
};

function isBot(contentField?: string) {
	return !!contentField;
}
