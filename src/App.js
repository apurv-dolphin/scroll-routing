import React, { useRef } from "react";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import Help from "./Pages/Help/Help";

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);
  const help = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <ScrollToTop />
      <Header
        scrollToSection={scrollToSection}
        home={home}
        about={about}
        contact={contact}
        help={help}
      />
      <div className="main-contain ">
        <div id="home" ref={home} className="home">
          <Home />
        </div>
        <div id="about" ref={about} className="about">
          <About />
        </div>
        <div id="contact" ref={contact} className="contact">
          <Contact />
        </div>
        <div id="help" ref={help} className="help">
          <Help />
        </div>
      </div>
    </div>
  );
}

export default App;
