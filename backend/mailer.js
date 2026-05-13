import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const sendMail = async (to, subject, text) => {

  try {

    const transporter = nodemailer.createTransport({

      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      family: 4,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }

    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");

  } catch (error) {

    console.error("Error sending email:", error);

    throw error;
  }
};

export default sendMail;