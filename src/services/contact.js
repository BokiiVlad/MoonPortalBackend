import nodemailer from "nodemailer";

export const sendContact = async ({ name, email, message }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.example.com",       // заміни на свій SMTP сервер
    port: 587,                      // або 465 для SSL
    auth: {
      user: "your_email@example.com",  // твій email
      pass: "your_email_password",     // пароль або app password
    },
  });

  await transporter.sendMail({
    from: '"MoonPortal" <your_email@example.com>',
    to: "admin@example.com",
    subject: "New Contact Request",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  });

  return { name, email, message };
};
