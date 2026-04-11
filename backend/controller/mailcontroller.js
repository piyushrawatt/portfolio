import sendMail from "../mailer.js";
import portfoliodata from "../schema/portfolio.js";
const mailController = async (req, res) => {
  const to = "okeyyyyess@gmail.com";

  const { name, mail, message } = req.body;

  const detail = `Name: ${name}\nEmail: ${mail}\nMessage: ${message}`;
 const dbdata = portfoliodata.create({
    name,mail,message
 })
  try {
    await sendMail(
      to,
      "Detail of the client",
      detail
    )


    res.status(201).json({
      message: "Successfully sent"
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message
    });
  }
};

export default mailController;