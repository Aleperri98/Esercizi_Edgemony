import { useRef } from "react";
import "./ScrollImage.css";

const moveRef = (element, dir) => {
  if (dir === "left") element.current.scrollLeft += 190;
  if (dir === "right") element.current.scrollLeft -= 190;

  if (element.current.scrollLeft >= 760) element.current.scrollLeft = 0;
  
  if (element.current.scrollLeft === 0) element.current.scrollLeft = 190;
};

function ScrollImage() {
 
  const carouselref = useRef();

  return (
    <div className="body">

      <div className="carousel" ref={carouselref}>
        <div className="wrapper">
            <img src="https://images.unsplash.com/photo-1617111490936-07b47eafdcd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=376&q=80"/>
            <img src="https://images.unsplash.com/photo-1613539246066-78db6ec4ff0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"/>
            <img src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"/>
            <img src="https://images.unsplash.com/photo-1468327768560-75b778cbb551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
            <img src="https://images.unsplash.com/photo-1470509037663-253afd7f0f51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
            <img src="https://images.unsplash.com/photo-1546842931-886c185b4c8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"/>
            <img src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"/>           
            <img src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"/>
        </div>
      </div>
      <div className="carousel__buttons">
        <button className="btn" onClick={() => moveRef(carouselref, "right")}>
          {"<"}
        </button>
        <button className="btn" onClick={() => moveRef(carouselref, "left")}>
          {">"}
        </button>
      </div>
    </div>
  );
}

export default ScrollImage;