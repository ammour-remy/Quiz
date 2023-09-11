import React from "react";
import logoRugby from "../../assets/images/Logo_RWC2023_FR.png";
import { FaBars } from "react-icons/fa";
import "./header.css";

function Header() {
  return (
    <header id="navBar" className="d-flex  ">

      <section className="m-3 ">
        <a href="/" title="lien vers la page d'accueil" alt='Logo chez switch'>
          <img src={logoRugby} id="logoRugby" alt="logo de de la world cup  france : 2023 de Rugby" />
        </a>
      </section>
      <p className="size fw-semibold">
        RUGBY <span className="fw-bold">WORLD CUP</span> FRANCE 2023
      </p>
     
    </header>
  );
}

export default Header;
