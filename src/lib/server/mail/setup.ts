import nodemailer from 'nodemailer';
import { EMAIL_PORT, EMAIL_HOST, EMAIL_PASSWORD, EMAIL_USER } from '$env/static/private';
export const smtpTransport = nodemailer.createTransport({
	host: EMAIL_HOST,
	port: Number(EMAIL_PORT),
	secure: false, // upgrade later with STARTTLS
	auth: {
		user: EMAIL_USER,
		pass: EMAIL_PASSWORD
	}
});

async function checkConnection() {
	try {
		await smtpTransport.verify();
		console.log('Sever is ready to send mails');
	} catch (error) {
		console.log(error);
	}
}

checkConnection();
