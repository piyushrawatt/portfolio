import portfoliodata from "../schema/portfolio.js";
import { Resend } from "resend";
import { config } from "dotenv";
config()
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMessage = async (req, res) => {
  try {

    const { name, email, message } = req.body;

    // Save to MongoDB Atlas
    const newMessage = await portfoliodata.create({
      name,
      email,
      message,
    });

    // Send Email
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "okeyyyyess@gmail.com",
      subject: "New Portfolio Contact",
      html: `
        <h2>Portfolio Contact</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
      data: newMessage,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
