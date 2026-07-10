import PageHero from "../components/common/PageHero";
import ContactSection from "../components/contact/ContactSection";

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Get in touch with our Department."
      />

      <ContactSection />
    </>
  );
}