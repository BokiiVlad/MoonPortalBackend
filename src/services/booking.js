import nodemailer from "nodemailer";

export const sendBooking = async ({ name, email }) => {

  const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    auth: {
      user: "your_email@example.com",
      pass: "password",
    },
  });


  await transporter.sendMail({
    from: '"MoonPortal" <your_email@example.com>',
    to: "admin@example.com",
    subject: "New booking",
    text: `Name: ${name}\nEmail: ${email}`,
  });


  return { name, email };
};
