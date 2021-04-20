const nodemailer = require("nodemailer");

export default function (req, res) {
  const { name, email, phone, subject, message } = req.body;

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    secure: true,
  });
  const mailOption = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: subject,
    text: `${message} | Enviado por: ${name} email: ${email} Telefone: ${phone}`,
    html: `<div>${message}</div><p>Enviado por:
    ${email}</p><p>email: ${email}</p><p>Telefone: ${phone}</p>`,
  };

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log(err);
      res.send("error" + JSON.stringify(err));
    } else {
      console.log("mail send");
      res.send("success");
    }
  });
}
