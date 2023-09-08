import { React, useState, useEffect } from "react";
import "./containerQuiz.css";
import Card from "../Card/Card";
import Quiz from "../Quiz/Quiz";

function ContainerQuiz(props) {
  const [showQuestion, setShowQuestion] = useState(true);
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);
  const [rotateClass, setRotateClass] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [correctClass, setCorrectClass] = useState("colorTrue");
  const [button, setButton] = useState("colorDefault");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const isActive = props.isActive; // Ajoute cette ligne pour définir isActive


  // Écouteur pour mettre à jour la hauteur de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    // Ajout de l'écouteur d'événement
    window.addEventListener("resize", handleResize);

    // Nettoyage de l'écouteur lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updateCounter = () => {
    // fonction permettant de incrémenter mon compteur
    props.setCounter(props.counter + 1);
  };
  const updateFalseCounter = () => {
    // fonction permettant de incrémenter mon compteur
    props.setFalseCounter(props.falseCounter + 1);
  };
  const updateRemains = () => {
    props.setRemains(props.remains + 1);
  };

  const iconesAnimationForCorrect = () => {
    props.setIconesAnimation("iconeAnimation");

    setTimeout(() => {
      props.setIconesAnimation("");
    }, 500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const selectedOption = e.target.elements.option?.value; // Utilisation de ?. pour éviter l'erreur si elements.option est undefined
    updateRemains();

    if (selectedOption === "wrong1" || selectedOption === "wrong2") {
      updateFalseCounter();
      setShowQuestion(false);
      setShowCorrect(false);
      setShowIncorrect(true);
      setRotateClass("rotate-in");
      setButton("colorFalse");

      setTimeout(() => {
        setShowQuestion(false);
        setShowIncorrect(false);
        setShowCorrect(true);
        setRotateClass("rotate-out");
        setCorrectClass("colorFalse");
        setIsButtonDisabled(true);
      }, 2500);
    } else if (selectedOption === "correct") {
      setShowQuestion(false);
      setShowIncorrect(false);
      setShowCorrect(true);
      setRotateClass("rotate-out");
      setButton("colorTrue");
      updateCounter();
      iconesAnimationForCorrect();
    }
    setIsFormSubmitted(true); // Mettre à jour l'état de soumission du formulaire
  };


  const numericValue = parseInt(props.index);

  return (
    <div
      className={`h-100 d-flex widthContainerCard flex-column cardScale ${
        windowHeight < 700 ? "scrollMain" : ""
      } ${props.isPrev || props.isNext === true ? "cardScalePrevNext" : ""} ${props.isActive ? "cardScaleActive" : "" }`}
    >
      <div className={windowHeight < 700 ? "h-75" : "h-50"}>
        <Card
          data={props.data}
          index={props.index}
          showQuestion={showQuestion}
          showCorrect={showCorrect}
          rotateClass={rotateClass}
          correctClass={correctClass}
          numericValue={numericValue}
          showIncorrect={showIncorrect}
        />
      </div>
      <div className={`h-100 d-flex widthContainerCard flex-column ${isActive ? '' : 'd-none'}`}>
        <Quiz
          formatWindow={windowHeight}
          data={props.data}
          index={props.index}
          handleFormSubmit={handleFormSubmit}
          numericValue={numericValue}
          button={button}
          isFormSubmitted={isFormSubmitted}
        />
      </div>
    </div>
  );
}

export default ContainerQuiz;
