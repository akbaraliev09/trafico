import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Faq from "./components/Faq.jsx";
import Clients from "./components/Clients.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Faq />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
