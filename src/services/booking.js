import nodemailer from "nodemailer";
import { getEnvVar } from "../utils/getEnvVar.js";

export const sendBooking = async ({ name, email }) => {

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
    subject: "New booking",
    text: `Name: ${name}\nEmail: ${email}`,
  });


  return { name, email };
};
