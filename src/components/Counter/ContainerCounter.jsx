import {React} from 'react'
import { FaCheck, FaTimes } from "react-icons/fa";
import iconeCercle from "../../assets/images/cercle.png"
import "./containerCounter.css";

function ContainerCounter(props) {
    
    
    return (
    <div
        id="locationCounter"
        className="w-100 pt-2 text-center p-0 m-0 fs-4 d-flex justify-content-around"
      >
        <p className="d-flex justify-content-center align-items-center counterWidth mt-1">
          {props.counter} / {props.length}
          <FaCheck className={`correctIcones ms-3 ${props.iconesAnimation}`} />
        </p>
        <p className="d-flex justify-content-center align-items-center counterWidth mt-1">
          {props.falseCounter} / {props.length}
          <FaTimes className={`falseIcones ms-3 ${props.iconesAnimation}`} />
        </p>
        <p className="d-flex justify-content-center align-items-center position-relative counterWidth mt-1">
          {props.remains} / {props.length}
          <img src={iconeCercle} id="cercle" className={`ms-3 ${props.iconesAnimation}`} alt="icone cercle"/>
         
        </p>
        
      </div>
  )
}

export default ContainerCounter