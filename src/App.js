import './App.css';
import { useRef } from 'react';
import { About, Banner, Contact, DrawerLinks, Experience, Footer, Navbar, Projects, Skills } from './Components';


function App() {
  const divRef = useRef();

  const scrollToDiv = () => {
    divRef.current.scrollIntoView({ behaviour: "smooth" })
  }

  return (
    <div className='d-flex'>
      <aside style={{ position: 'fixed', top: "54%", left: "3%", zIndex: "111" }}>
        <DrawerLinks />
      </aside>
      <main>
        <Navbar scrollToDiv={scrollToDiv} />
        <Banner scrollToDiv={scrollToDiv} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact divRef={divRef} />
        <Footer />
      </main>
    </div>
  );
}

export default App;
