const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

/* Middleware */

app.use(cors());
app.use(express.json());

/* Home Route */

app.get("/", (req, res) => {
  res.send("Backend Working 🚀");
});

/* Test Mail Route */

app.get("/testmail", async (req, res) => {

  try {

    const transporter = nodemailer.createTransport({

      host: "smtp.gmail.com",
      port: 465,
      secure: true,

      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },

    });

    await transporter.sendMail({

      from: process.env.EMAIL,

      to: process.env.EMAIL,

      subject: "Test Mail",

      text: "Portfolio backend working 🚀",

    });

    res.send("Mail Sent Successfully ✅");

  } catch (error) {

    console.log(error);

    res.send(error.message);

  }

});

/* Contact Route */

app.post("/contact", async (req, res) => {

  const { name, email, message } = req.body;

  try {

    const transporter = nodemailer.createTransport({

      host: "smtp.gmail.com",
      port: 465,
      secure: true,

      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },

    });

    await transporter.sendMail({

      from: process.env.EMAIL,

      to: process.env.EMAIL,

      replyTo: email,

      subject: `Portfolio Message from ${name}`,

      text: `
Name: ${name}

Email: ${email}

Message:
${message}
      `,

    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });

  }

});

/* Server */

/* Server */
const PORT = process.env.PORT || 30001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});