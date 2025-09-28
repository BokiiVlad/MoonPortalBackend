import Mailjet from "node-mailjet";
import { getEnvVar } from "../utils/getEnvVar.js";

export const sendBooking = async ({ name, email }) => {
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
            Email: getEnvVar("ADMIN_EMAIL"),
          },
        ],
        Subject: "New booking",
        TextPart: `Name: ${name}\nEmail: ${email}`,
      },
    ],
  });

  await request;
  return { name, email };
};
