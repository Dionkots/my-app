import React from "react";
import './Slider.css'
import LeftArrow from './icons/LeftArrow.png'
import RightArrow from './icons/RightArrow.png'

function SliderBtn({direction , moveSlide}) {
    return(
        <button onClick={moveSlide} className={direction === "next" ? "btn-slide next" : "btn-slide previous"}>
            <img alt="Right arrow" src={direction === "next" ? RightArrow : LeftArrow}/>
        </button>
    )
}

export default SliderBtn;