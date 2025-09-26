import Mailjet from "node-mailjet";
import { getEnvVar } from "../utils/getEnvVar.js";

export const sendContactRequest = async ({ name, email, message = "" }) => {
  const mailjet = Mailjet.apiConnect(
    getEnvVar("MAILJET_API_KEY"),
    getEnvVar("MAILJET_API_SECRET")
  );

  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: getEnvVar("FROM_EMAIL"),
          Name: "MoonPortal",
        },
        To: [
          {
            Email: getEnvVar("FROM_EMAIL"),
          },
        ],
        Subject: "New Contact Request",
        TextPart: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        ReplyTo: {
          Email: email,
        },
      },
    ],
  });

  await request;
  return { name, email, message };
};
