import { createMailer } from './mailer';
import { smtpTransport } from './setup';
import { contactMail } from './mail';
const mailer = createMailer(smtpTransport);

export { contactMail, mailer };
