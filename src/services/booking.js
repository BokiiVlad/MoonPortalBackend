import nodemailer from "nodemailer";
import { getEnvVar } from "../utils/getEnvVar.js";

export const sendBooking = async ({ name, email }) => {
  const transporter = nodemailer.createTransport({
    host: getEnvVar("SMTP_HOST"),
    port: Number(getEnvVar("SMTP_PORT")),
    secure: false,
    auth: {
      user: getEnvVar("SMTP_USER"),
      pass: getEnvVar("SMTP_PASS"),
    },
  });

  await transporter.sendMail({
    from: `"MoonPortal" <${getEnvVar("FROM_EMAIL")}>`,
    to: getEnvVar("ADMIN_EMAIL"),
    subject: "New booking",
    text: `Name: ${name}\nEmail: ${email}`,
  });

  return { name, email };
};
