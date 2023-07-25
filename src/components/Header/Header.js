import React from "react";
import "./header.css";

export default function Header(props) {
  const { scrollToSection, home, about, contact, help } = props;
  return (
    <header className="navbar">
      <div
        className="navbar__title navbar__item"
        onClick={() => {
          scrollToSection(home);
        }}
      >
        <a href="#home">Logo</a>
      </div>
      <div className="navbar__item" onClick={() => scrollToSection(about)}>
        <a href="#about">About Us</a>
      </div>
      <div className="navbar__item" onClick={() => scrollToSection(contact)}>
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar__item" onClick={() => scrollToSection(help)}>
        <a href="#help">Help</a>
      </div>
    </header>
  );
}
