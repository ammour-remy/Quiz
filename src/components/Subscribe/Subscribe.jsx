import React, { useState, useEffect } from "react";
import utilisateur from "../../assets/data/Utilisateur.json";
import "./subscribe.css";

function Subscribe(props) {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    commentaire: "",
  });
 

  const [formDataValid, setFormDataValid] = useState(false); // Tableau pour stocker les données soumises

  const [formDataArray, setFormDataArray] = useState([]); // Tableau pour stocker les données soumises

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleValidationAndSubmit = (setFormDataValid) => {
    // Vérifiez que les champs "nom", "prénom" et "email" sont remplis et que l'email a un format valide
    if (
      formData.nom.trim() === "" ||
      formData.prenom.trim() === "" ||
      !isValidEmail(formData.email)
    ) {
      // Si l'une des conditions n'est pas remplie, ne faites rien
      window.alert(
        "Veuillez remplir les champs nom, prénom et email correctement pour valider le formulaire."
      );
      return;
    }

    // Copiez les données du formulaire dans un nouvel objet
    const newData = {
      nom: formData.nom,
      prenom: formData.prenom,
      email: formData.email,
      commentaire: formData.commentaire,
    };

    // Ajoutez newData au tableau des données soumises
    setFormDataArray([...formDataArray, newData]);

    // Affichez le tableau dans la console

    // Réinitialisez les champs du formulaire
    setFormData({
      nom: "",
      prenom: "",
      email: "",
      commentaire: "",
    });
    
    
    props.setclosePopUp(true);
    setFormDataValid(true);
    
  };
  if(formDataValid === true) {
    
    console.log("Données soumises :", formDataArray);
  }
  
      // Sauvegardez le tableau formDataArray dans le stockage local du navigateur
      localStorage.setItem("Utilisateur", JSON.stringify(formDataArray));
  
  const isValidEmail = (email) => {
    // Utilisez une expression régulière pour vérifier le format de l'email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };
  if (props.closePopUp === true) {
    props.setPopUp("noBlur");
  }

  return (
    <article
      className={`position-absolute border border-2 p-4 container posPopUp rounded-4 ${
        props.none === "none" && props.closePopUp === false ? "" : "d-none"
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
          informations demandées dans le formulaire ci-dessous.
        </p>
        <p>
          Vous avez fait un score de {props.counter} sur {props.length} !
          <br />
        </p>
      </section>
      <section>
        <form className="d-flex flex-column row align-items-center">
          <label htmlFor="nom">
            Nom<span className="text-danger"> * </span>
          </label>
          <input
            type="text"
            required
            name="nom"
            className="col-12 col-md-6 my-3 rounded-1"
            onChange={handleInputChange}
            value={formData.nom}
          />
          <label htmlFor="prenom">
            Prénom<span className="text-danger"> * </span>
          </label>
          <input
            type="text"
            required
            name="prenom"
            className="col-12 col-md-6 my-3 rounded-1"
            onChange={handleInputChange}
            value={formData.prenom}
          />
          <label htmlFor="email">
            E-mail<span className="text-danger"> * </span>
          </label>
          <input
            type="email"
            required
            name="email"
            className="col-12 col-md-6 my-3 rounded-1"
            onChange={handleInputChange}
            value={formData.email}
          />
          <label htmlFor="">Commentaire</label>
          <textarea
            type="text"
            className="col-12 col-md-6 my-3 rounded-1"
            name="commentaire"
            onChange={handleInputChange}
            value={formData.commentaire}
          />
          <button
            type="button"
            onClick={handleValidationAndSubmit}
            className="mt-3 p-2 rounded-2"
          >
            VALIDER
          </button>
        </form>
      </section>
    </article>
  );
}

export default Subscribe;
