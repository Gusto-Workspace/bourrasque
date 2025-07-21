// client/api/contact.cjs
const SibApiV3Sdk = require("sib-api-v3-sdk");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { firstname, lastname, email, phone, subject, message } = req.body;
  const name = `${firstname} ${lastname}`;

  const client = SibApiV3Sdk.ApiClient.instance;
  client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

  try {
    const api = new SibApiV3Sdk.TransactionalEmailsApi();
    await api.sendTransacEmail({
      sender: {
        email: "no-reply@bourrasque-ploemeur.fr",
        name: "Formulaire Contact",
      },
      to: [{ email: "bourrasque-ploemeur@gmail.com", name: "Équipe Bourrasque" }],
      subject: `Nouveau message : ${subject}`,
      htmlContent: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
      replyTo: { email, name },
    });
    return res.status(200).json({ message: "Email envoyé avec succès" });
  } catch (err) {
    console.error("❌ Brevo error:", err.response?.body || err);
    return res
      .status(500)
      .json({ message: "Erreur envoi mail", error: err.message });
  }
};
