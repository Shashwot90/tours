import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      {/* <h1>Call The Components</h1> */}
      <Hero 
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        
        btnClass="hide"
      />  
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
