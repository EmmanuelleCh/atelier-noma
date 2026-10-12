import Container from "@/components/ui/Container";
import ContactForm from "@/components/sections/ContactForm";

export default function ContactPage() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              CONTACT
            </p>

            <h1 className="mt-3 font-serif text-4xl md:text-5xl">
              Parlons de votre projet.
            </h1>

            <p className="mt-4 text-base leading-7 text-[var(--muted-foreground)]">
              Une question, une idée ou simplement envie de dire bonjour ?
              Envoyez-nous un message.
            </p>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
