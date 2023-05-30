import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/moun.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      {/* <h1>Call The Components</h1> */}
      <Hero 
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        
        btnClass="hide"
      /> 
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
