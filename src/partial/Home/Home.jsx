import React, { useState, useEffect } from "react";
import "./home.css";

import ContainerCounter from "../../components/Counter/ContainerCounter";
import QuizTitle from "../../components/QuizTitle/QuizTitle";
import Carousel from "../../components/carousel/Carousel";
import CardsListArray from "./../../assets/data/rugby.json";
import Header from "./../Header/Header";
import Subscribe from "../../components/Subscribe/Subscribe";

function Home() {
  // Constantes

  const lengthCards = CardsListArray.length;
  const [counter, setCounter] = useState(0);
  const [falseCounter, setFalseCounter] = useState(0);
  const [remains, setRemains] = useState(0);
  const [iconesAnimation, setIconesAnimation] = useState("");
  const [closePopUp, setclosePopUp] = useState(false);
  const [popUp, setPopUp] = useState("noBlur");
  useEffect(() => {
    if (remains === lengthCards) {
      setPopUp("blur");
    } else if (closePopUp === true) {
      setPopUp("noBlur");
    }
  }, [remains, closePopUp]);



  // Rendu du composant
  return (
    <main className="relative d-flex justify-content-center align-items-center vw-100 vh-100 overflow-hidden">
    <div className={`vw-100 vh-100 d-flex flex-column overflow-hidden ${popUp}`}>
      <Header 
       none={remains === lengthCards ? "none" : ""}
       setclosePopUp={setclosePopUp}
       />
      <ContainerCounter
        // permet la modification des compteurs suivant la validation des formulaire
        counter={counter}
        setCounter={setCounter}
        remains={remains}
        setRemains={setRemains}
        falseCounter={falseCounter}
        setFalseCounter={setFalseCounter}
        length={lengthCards}
        // permet de gerer l'animation des icones
        iconesAnimation={iconesAnimation}
        setIconesAnimation={setIconesAnimation}
        />
      <QuizTitle />
      <Carousel
        data={CardsListArray}
        counter={counter}
        setCounter={setCounter}
        remains={remains}
        setRemains={setRemains}
        falseCounter={falseCounter}
        setFalseCounter={setFalseCounter}
        length={lengthCards}
        iconesAnimation={iconesAnimation}
        setIconesAnimation={setIconesAnimation}
        />
    </div>
      <Subscribe
      
      none={remains === lengthCards ? "none" : ""}
      close={ closePopUp === true ? "popup" : ""}
      counter={counter}
      closePopUp={closePopUp}
      setclosePopUp={setclosePopUp}
      popUp={popUp}
      length={lengthCards}
      setPopUp={setPopUp}
      
      />
    </main>
  );
}

export default Home;
