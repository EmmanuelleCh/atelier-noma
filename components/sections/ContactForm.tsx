"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import Checkbox from "@/components/ui/Checkbox";
import Radio from "@/components/ui/Radio";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [project, setProject] = useState("");
  const [budget, setBudget] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({
      name,
      email,
      message,
      project,
      budget,
      accepted,
    });

    setIsSent(true);
  };

  return (
    <div>
      {isSent ? (
        <div className="rounded-[var(--radius)] border border-green-200 bg-green-50 p-6">
          <h2 className="font-semibold text-green-800">Message envoyé !</h2>

          <p className="mt-2 text-sm text-green-700">
            Merci pour votre message. Nous reviendrons vers vous rapidement.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Nom"
            name="name"
            placeholder="Emma"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="emma@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <Textarea
            label="Message"
            name="message"
            placeholder="Votre message..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />

          <Select
            label="Type de projet"
            name="project"
            value={project}
            onChange={(event) => setProject(event.target.value)}
            required
            options={[
              { label: "Site vitrine", value: "website" },
              { label: "E-commerce", value: "ecommerce" },
              { label: "Dashboard ou CRM", value: "dashboard" },
              { label: "Autre projet", value: "other" },
            ]}
          />

          <Radio
            label="Quel est votre budget ?"
            name="budget"
            value={budget}
            onChange={(event) => setBudget(event.target.value)}
            required
            options={[
              { label: "Moins de 1 000 €", value: "small" },
              { label: "1 000 à 3 000 €", value: "medium" },
              { label: "Plus de 3 000 €", value: "large" },
            ]}
          />

          <Checkbox
            name="terms"
            label="J'accepte d'être recontactée au sujet de ma demande."
            checked={accepted}
            onChange={(event) => setAccepted(event.target.checked)}
            required
          />

          <Button type="submit">Envoyer le message</Button>
        </form>
      )}
    </div>
  );
}
