import React from "react";
import logoRugby from "../../assets/images/Logo_RWC2023_FR.png";
import { FaStar  } from "react-icons/fa";
import "./header.css";

function Header(props) {
  
  return (
    <header id="navBar" className="d-flex  align-items-center justify-content-center">
<article className="position-absolute start-0 ms-3">

      <section className="mx-3 d-flex align-items-center">
        <a href="/Quiz/" title="lien vers la page d'accueil" alt='Logo chez switch'>
          <img src={logoRugby} id="logoRugby" alt="logo de de la world cup  france : 2023 de Rugby" />
        </a>
      </section>
      <p className="size fw-semibold m-0">
        RUGBY <span className="fw-bold">WORLD CUP</span> FRANCE 2023
      </p>
</article>
      <h2 className="">MYVINGO</h2>
      <button className={`position-absolute end-0 m-3 rounded-5 ${props.none === "none" ? "" : "d-none"}`} 
      onClick={() =>  props.setclosePopUp(false)}>
        <FaStar />
      </button>
    </header>
  );
}

export default Header;
