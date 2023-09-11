import React, { useState } from "react";
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
   if(remains === lengthCards) {
    console.log(remains)
   }

  // Rendu du composant
  return (
    <div className={`vw-100 vh-100 d-flex flex-column overflow-hidden ${remains === lengthCards ? "shadow blur" : ""}`}>
      <Header />
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
      <Subscribe/>
    </div>
  );
}

export default Home;
