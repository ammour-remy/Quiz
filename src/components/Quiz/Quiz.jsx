import React, { useState, useEffect } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import "./quiz.css";

function Quiz(props) {
  
  const [textCorrect] = useState("Valider");
  const [selectedOption, setSelectedOption] = useState("");

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  
  useEffect(() => {
    // Écouteur pour mettre à jour la hauteur de la fenêtre
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

  
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value); // Mettre à jour la valeur sélectionnée
  };
  const handleOptionSelect = (e) => {
    const radio = e.currentTarget.querySelector('input[type="radio"]');
    if (radio) {
      radio.checked = true;
      setSelectedOption(radio.value); // Mettre à jour la valeur sélectionnée
    }
    e.stopPropagation(props.windowHeight);
  };

  const numericValue = parseInt(props.index);
  
  return (
    <section
      id={`quiz-${props.numericValue}`}
      className="d-flex h-100 flex-column"
    >
      <div className="">
        {props.data &&
          props.data.questions &&
          props.data.questions.map((question, index) => (
            <div
              className=""
              key={index}
            >
              <p className="fs-6 fw-semibold">
                {question.question}
              </p>
            </div>
          ))}
      </div>
      <form
        className="d-flex heightForm flex-column justify-content-around"
        onSubmit={props.handleFormSubmit}
      >
        <div
          className={`d-flex row ${windowHeight < 700 ? "my-3" : ""}`}
          onClick={handleOptionSelect}
        >
          <div className="col-2 d-flex align-items-center">
            {props.data &&
              props.data.questions &&
              props.data.questions.map((question, index) => (
                <input
                  key={index}
                  className=""
                  type="radio"
                  name="option"
                  id={"option" + parseInt(numericValue)}
                  value={question.choices[0].value}
                  onChange={handleOptionChange}
                  onClick={(e) => e.stopPropagation()}
                />
              ))}
          </div>
          <div className="col-7">
            {props.data &&
              props.data.questions &&
              props.data.questions.map((question, index) => (
                <label
                  key={index}
                  className=""
                  htmlFor={`option${numericValue}`}
                >
                  {question.choices[0].name}
                </label>
              ))}
          </div>
          <div
            className={`col-2 d-flex align-items-center ${
              props.isFormSubmitted ? "" : "d-none"
            }`}
          >
            {props.data &&
              props.data.questions &&
              props.data.questions.map((question, index) => {
                if (question.choices[0].value === "correct") {
                  return (
                    <FaCheck
                      key={index}
                      className={`correctIcones test fs-3 iconeAnimation`}
                    />
                  );
                } else {
                  return (
                    <FaTimes
                      key={index}
                      className={`falseIcones fs-3 iconeAnimation`}
                    />
                  );
                }
              })}
          </div>
        </div>
        <div
          className={`d-flex row ${windowHeight < 700 ? "my-3" : ""}`}
          onClick={handleOptionSelect}
        >
          <div className="col-2 d-flex align-items-center">
            {props.data &&
              props.data.questions &&
              props.data.questions.map((question, index) => (
                <input
                  key={index}
                  className=""
                  type="radio"
                  name="option"
                  id={"option" + parseInt(numericValue + 1)}
                  value={question.choices[1].value}
                  onChange={handleOptionChange}
                  onClick={(e) => e.stopPropagation()}
                />
              ))}
          </div>
          <div className="col-7">
            {props.data &&
              props.data.questions &&
              props.data.questions.map((question, index) => (
                <label
                  key={index}
                  className=""
                  htmlFor={`option${numericValue + 1}`}
                >
                  {question.choices[1].name}
                </label>
              ))}
          </div>
          <div
            className={`col-2 d-flex align-items-center ${
              props.isFormSubmitted === true ? "" : "d-none"
            }`}
          >
            {props.data &&
              props.data.questions &&
              props.data.questions.map((question, index) => {
                if (question.choices[1].value === "correct") {
                  return (
                    <FaCheck
                      key={index}
                      className={`correctIcones test fs-3 iconeAnimation`}
                    />
                  );
                } else {
                  return (
                    <FaTimes
                      key={index}
                      className={`falseIcones fs-3 iconeAnimation`}
                    />
                  );
                }
              })}
          </div>
        </div>
        <div
          className={`d-flex row ${windowHeight < 700 ? "my-3" : ""}`}
          onClick={handleOptionSelect}
        >
          <div className="col-2 d-flex align-items-center">
            {props.data &&
              props.data.questions &&
              props.data.questions.map((question, index) => (
                <input
                  key={index}
                  className=""
                  type="radio"
                  name="option"
                  id={"option" + parseInt(numericValue + 2)}
                  value={question.choices[2].value}
                  onChange={handleOptionChange}
                  onClick={(e) => e.stopPropagation()}
                />
              ))}
          </div>
          <div className="col-7">
            {props.data &&
              props.data.questions &&
              props.data.questions.map((question, index) => (
                <label
                  key={index}
                  className="form-check-label"
                  htmlFor={`option${numericValue + 2}`}
                >
                  {question.choices[2].name}
                </label>
              ))}
          </div>
          <div
            className={`col-2 d-flex align-items-center ${
                props.isFormSubmitted ? "" : "d-none"
            }`}
          >
            {props.data &&
              props.data.questions &&
              props.data.questions.map((question, index) => {
                if (question.choices[2].value === "correct") {
                  return (
                    <FaCheck
                      key={index}
                      className={`correctIcones test fs-3 iconeAnimation`}
                    />
                  );
                } else {
                  return (
                    <FaTimes
                      key={index}
                      className={`falseIcones fs-3 iconeAnimation`}
                    />
                  );
                }
              })}
          </div>
        </div>
        <button
          type="submit"
          className={`btn py-2 btn-primary my-3 mx-auto ${props.button}`}
          disabled={!selectedOption ||  props.isFormSubmitted}
        >
          {textCorrect}
        </button>
      </form>
    </section>
  );
}

export default Quiz;
