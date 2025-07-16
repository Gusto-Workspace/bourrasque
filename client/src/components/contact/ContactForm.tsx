// ContactForm.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",        // ajout du champ phone
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Erreur réseau");
      setStatus("sent");
      setForm({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",     
        subject: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.div
      className="bg-bourrasque-blue p-8 rounded-[40px] shadow-lg"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h2 className="font-haarlem text-3xl mb-6 text-bourrasque-cream">
        Envoyez-nous un message
      </h2>
      <form onSubmit={handleSubmit} className="font-poiret space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {['firstname', 'lastname'].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-bourrasque-cream mb-2">
                {field === 'firstname' ? 'Prénom' : 'Nom'}
              </label>
              <input
                id={field}
                type="text"
                value={(form as any)[field]}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border bg-bourrasque-cream border-gray-300 focus:outline-none focus:ring-2 focus:ring-bourrasque-yellow"
                required
              />
            </div>
          ))}
        </div>

        <div>
          <label htmlFor="email" className="block text-bourrasque-cream mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border bg-bourrasque-cream border-gray-300 focus:outline-none focus:ring-2 focus:ring-bourrasque-yellow"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-bourrasque-cream mb-2">
            Téléphone
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border bg-bourrasque-cream border-gray-300 focus:outline-none focus:ring-2 focus:ring-bourrasque-yellow"
            required
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-bourrasque-cream mb-2">
            Sujet
          </label>
          <input
            id="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border bg-bourrasque-cream border-gray-300 focus:outline-none focus:ring-2 focus:ring-bourrasque-yellow"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-bourrasque-cream mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            value={form.message}
            onChange={handleChange}
            className="resize-none w-full px-4 py-3 rounded-lg border bg-bourrasque-cream border-gray-300 focus:outline-none focus:ring-2 focus:ring-bourrasque-yellow"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full text-lg bg-bourrasque-darkBlue hover:bg-bourrasque-darkBlue/90 text-white font-medium py-3 rounded-full transition-colors"
          disabled={status === 'sending' || status === 'sent'}
        >
          {status === 'sending'
            ? 'Envoi...'
            : status === 'sent'
            ? 'Envoyé !'
            : 'Envoyer'}
        </Button>

        {status === 'error' && (
          <p className="text-red-500 mt-2">
            Une erreur est survenue, réessayez.
          </p>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;
