import {React } from 'react';
import "./card.css";
import FalseImage from "../../assets/images/cartonRouge.png";

function Card(props) {
    
  return (
      <div className="h-100 fs-small d-flex">
       <section
        id={`containerCard-${props.numericValue}`}
        className="w-100 mx-auto overflow-hidden border border-3 rounded-3"
      >
        <div
          className={`h-100 ${props.rotateClass}`}
        >
          {props.showQuestion && (
            <div className="h-100">
              <div className=" d-flex p-3 justify-content-center h-75">
                <img
                  src={"/icones/" + props.data.imageTitle}
                  className="py-4"
                  alt={"icones " + props.data.name}
                />
              </div>
              <div className="h-25 colorDefault d-flex justify-content-center align-items-center">
                <h3 className="">{props.data.name}</h3>
              </div>
            </div>
          )}
          {props.showIncorrect && (
            <div className="h-100">
            <div className="colorFalse d-flex justify-content-center h-75">
                <img
                  src={FalseImage}
                  className=" p-5 py-4"
                  alt="icones mauvaise réponse"
                />
              </div>
              <div className="h-25 d-flex justify-content-center align-items-center">
                <h3 className="">Mauvaise réponse !!</h3>
              </div>
            </div>
          )}
          {props.showCorrect && (
             <div className="h-100">
              <div
                className={`h-50 d-flex justify-content-center ${props.correctClass}`}
              >
                <img
                  src={"/icones/" + props.data.imageTitle}
                  className="p-4"
                  alt={"icones " + props.data.name}
                />
              </div>
              <div className="d-flex flex-column h-50">
                <h5 className="fs-6 px-2">
                  {props.data.correctTitle}
                </h5>
                {props.data.questions.map((question, index) => (
                  <div
                    key={index}
                    className="descriptionForm d-flex align-items-center"
                  >
                    <p className="px-2">
                      {question.definition}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Card