import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";

export default function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Reviews/>
      <ContactForm/>
      <Footer/>
    </main>
  )
}