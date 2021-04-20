export default function (req, res) {
  const { name, email, phone, subject, message } = req.body;

  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'carlosemidiopereira@gmail.com', // Change to your recipient
    from: 'carlosemidiopereira@gmail.com', // Change to your verified sender
    subject: subject,
    text: `${message} | Enviado por: ${name} email: ${email} Telefone: ${phone}`,
    html: `<div>${message}</div><p>Enviado por:
    ${name}</p><p>email: ${email}</p><p>Telefone: ${phone}</p>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
      res.status(200).json({ success: 'Email enviado com sucesso!' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: JSON.stringify(error) });
    });
}
