import './App.css';
import NavbarComponent from './Components/Navbar';
import Banner from "./Components/Banner";
import { Skills } from './Components/Skills';
import { Contact } from './Components/ContactForm';
import { Footer } from './Components/Footer';
import { useRef } from 'react';


function App() {
  const divRef = useRef();

  const scrollToDiv = () => {
    divRef.current.scrollIntoView({ behaviour: "smooth" })
  }

  return (
    <>
      <NavbarComponent scrollToDiv={scrollToDiv} />
      <Banner scrollToDiv={scrollToDiv} />
      <Skills />
      <Contact divRef={divRef} />
      <Footer />
    </>
  );
}

export default App;
