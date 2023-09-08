import React from "react";
import logoSwitch from "../../assets/images/logoSwitch.png";
import { FaBars } from "react-icons/fa";
import "./header.css";

function Header() {
  return (
    <header id="navBar" className="d-flex  justify-content-between">

      <section className="m-3 ">
        <a href="/" title="lien vers la page d'accueil" alt='Logo chez switch'>
          <img src={logoSwitch} id="logoSwitch" alt="logo de 'Chez Switch'" />
        </a>
      </section>
      <nav className="m-3">
        <FaBars id="burgerMenu" className="border border-3 rounded-2 p-2"/>
      </nav>
    </header>
  );
}

export default Header;
