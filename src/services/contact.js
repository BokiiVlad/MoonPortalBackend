import nodemailer from "nodemailer";
import { getEnvVar } from "../utils/getEnvVar.js";

export const sendContactRequest = async ({ name, email, message }) => {
  const transporter = nodemailer.createTransport({
    host: getEnvVar("SMTP_HOST"),
    port: Number(getEnvVar("SMTP_PORT")),
    secure: false,
    auth: {
      user: getEnvVar("SMTP_USER"),
      pass: getEnvVar("SMTP_PASS"),
    },
  });

  const mailOptions = {
    from: `"MoonPortal" <${getEnvVar("FROM_EMAIL")}>`,
    to: getEnvVar("ADMIN_EMAIL"),
    subject: "New Contact Request",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    replyTo: email,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log("Message sent:", info);

  return { name, email, message };
};
