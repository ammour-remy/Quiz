import React from "react";
import "./subscribe.css";

function Subscribe(props) {
  console.log(props.none + "none");
  console.log(props.close + "close");
  if(props.closePopUp === true) {
    props.setPopUp("")
  }

  return (
    <article
      className={`position-absolute border border-2 p-4 container posPopUp rounded-4 ${
        props.none === "none" && props.closePopUp === "flase" ? "" : "d-none"
      }`}
    >
      <button
        id="closePopUp"
        className="position-absolute top-0 end-0 m-1 rounded-5"
        onClick={() => props.setclosePopUp(true)}
      >
        x
      </button>
      <section>
        <h4>Merci d'avoir participé à notre quiz!!</h4>
        <p className="mt-4">
          Si vous voulez qu'on vous envoie votre score par mail, figurer dans le
          classement ou pour nous faire un retour, veuillez saisir les
          informations demandé dans le formulaire si dessous.
        </p>
      </section>
      <section>
        <form action="" className="d-flex flex-column row align-items-center">
          <label htmlFor="">
            Nom<span className="text-danger"> * </span>
          </label>
          <input
            type="text"
            required
            className="col-12 col-md-6 my-3 rounded-1"
          />
          <label htmlFor="">
            Prénom<span className="text-danger"> * </span>
          </label>
          <input
            type="text"
            required
            className="col-12 col-md-6 my-3 rounded-1"
          />
          <label htmlFor="">
            E-mail<span className="text-danger"> * </span>
          </label>
          <input
            type="email"
            required
            className="col-12 col-md-6 my-3 rounded-1"
          />
          <label htmlFor="">commentaire</label>
          <textarea type="text" className="col-12 col-md-6 my-3 rounded-1" />
          <button type="submit" className="mt-3 p-2 rounded-2">
            VALIDER
          </button>
        </form>
      </section>
    </article>
  );
}

export default Subscribe;
