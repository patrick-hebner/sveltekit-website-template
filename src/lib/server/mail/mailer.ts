import type { Transporter } from 'nodemailer';
import { contactMail, type ContactMailData } from './mail';

const FROM = 'sender@server.com';

export function createMailer(transporter: Transporter) {
	async function sendContactMail(contactData: ContactMailData) {
		return transporter.sendMail(contactMail(FROM, contactData.email, contactData));
	}

	return {
		sendContactMail
	};
}
