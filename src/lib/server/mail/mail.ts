import type Mail from 'nodemailer/lib/mailer';

export type ContactMailData = {
	firstname: string;
	lastname: string;
	email: string;
	message: string;
};

export function contactMail(
	from: string,
	to: string,
	data: ContactMailData,
	options: {
		subject: string;
	} = { subject: 'New contact message' }
): Mail.Options {
	return {
		from,
		to,
		subject: options.subject,
		text: contactPlainTextMessage(data),
		html: contactHtmlMessage(data)
	};
}

function contactPlainTextMessage(data: ContactMailData): string {
	return `
    E-Mail: ${data.email}\r\n
    First name: ${data.firstname}\r\n
    Last name: ${data.lastname}\r\n
    Message: ${data.message}\r\n
    `;
}
function contactHtmlMessage(data: ContactMailData): string {
	return `
    <div style="font-family: sans-serif;">
    <ul style="list-style: none; font-weight: bold; padding-left: 0;">
        <li> E-Mail: ${data.email}</li>
        <li> First name: ${data.firstname}</li>
        <li> Last name: ${data.lastname}</li>
    </ul>
    <hr>
    <p>${data.message}</p>
    </div>
    `;
}
