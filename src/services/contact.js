import nodemailer from "nodemailer";
import { getEnvVar } from "../utils/getEnvVar.js";
export const sendContactRequest = async ({ name, email, message }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
      user: getEnvVar("SMTP_USER"),
      pass: getEnvVar("SMTP_PASS"),
    },
  });

  await transporter.sendMail({
    from: `"MoonPortal" <${getEnvVar("SMTP_USER")}>`,
    to: getEnvVar("ADMIN_EMAIL"),
    subject: "New Contact Request",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    replyTo: email,
  });

  return { name, email, message };
};
