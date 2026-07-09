// import PageBanner from "../components/layout/PageBanner";
import PageHero from "../components/common/PageHero";
import ContactSection from "../components/contact/ContactSection";

// import bannerImage from "../assets/images/building2.png";

export default function Contact() {
  return (
    <>
      {/* <PageBanner
        title="Contact Us"
        subtitle="Department of Computer Science & Engineering"
        image={bannerImage}
      /> */}

      <PageHero
        title="Contact Us"
        description="Get in touch with the Department of Computer Science and Engineering."
      />


      <ContactSection />
    </>
  );
}