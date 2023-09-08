// Modules et imports CSS
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./carousel.css";
import ContainerQuiz from "../ContainerQuiz/ContainerQuiz";

// Composant Carousel
function Carousel(props) {
  // Constantes
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
 

  // Fonction pour récupérer le nombre de slidesPerView (slide à afficher) en fonction de la taille de l'écran
  function getSlidesPerView() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      return 1;
    } else if (windowWidth >= 768 && windowWidth < 1400) {
      return 3;
    } else {
      return 5;
    }
  }

  // État pour le nombre de slidesPerView
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  // Effet pour gérer le changement de taille de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };

    window.addEventListener("resize", handleResize);

    // Nettoyer l'écouteur d'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Fonction pour gérer le clic sur une slide
  const handleSlideClick = (index) => {
    if (index !== undefined && index !== activeSlideIndex) {
      setActiveSlideIndex(index);
    }
  };


  // Rendu du composant
  return (
    <div id="formatCarousel" className="container overflow-hidden">
      <Swiper
        className="h-100"
        // modules utilisé pour la mise en forme du carousel
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // permet que le carousel soit defilable indifiniment 
        loop={true}
        // pour le centrage des slides apparentes 
        centeredSlides={true}
        //margin pour espacer les slides
        spaceBetween={10}
        //permet de gerer le nombre de slide afficher a l'écran avec la fonction qui suivant la taille d'écran affiche un nombre soit 1, soit 3 ou soit 5 suivant l'espace disponible 
        slidesPerView={slidesPerView}
        // permet de masquer les icones de navigation après une certaine largeur 
        navigation={window.innerWidth < 768}
        slideToClickedSlide={true}
      >
        {/* boucle permettant de crée autant de components SwiperSlide suivant le nombre d'element que j'ai dans le props.data (les datas son dans le json)  */}
        {props.data.map((card, index) => (
          <SwiperSlide
            key={index}
            className="d-flex justify-content-center h-100 "
            index={index}
            // permet de rendre cliquable et de modifier la slide cliqué en slide principale
            onClick={() => handleSlideClick(index)}
            // monter que les sildes sont cliquable
            style={{ cursor: "pointer" }}
          >
            {/* permet de rajouter un attribut au element ayant la condition isActive */}
            {({ isActive, isPrev, isNext }) => (
              <ContainerQuiz
                index={index}
                length={props.lengthCards}
                // json avec tout les elements (titre, description, formulaire ...) dans l'attribut data 
                data={card}
                // permet de savoir quel slide et active, precedente et suivante pour modifier le style du ContainertQuiz 
                isActive={isActive}
                isPrev={isPrev}
                isNext={isNext}
                // permet la modification des compteurs suivant la validation des formulaire 
                counter={props.counter}
                setCounter={props.setCounter}
                remains={props.remains}
                setRemains={props.setRemains}
                falseCounter={props.falseCounter}
                setFalseCounter={props.setFalseCounter}
                // permet de gerer l'animation des icones 
                iconesAnimation={props.iconesAnimation}
                setIconesAnimation={props.setIconesAnimation}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
 