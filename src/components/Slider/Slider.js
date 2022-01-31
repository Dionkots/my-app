import React from "react";
import { useState, useEffect } from "react";
import './Slider.css'
import dataSlider from "./SliderData";


function Slider() {
    
    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (slideIndex === dataSlider.length - 1) {
                setSlideIndex(1);
            } else {
                setSlideIndex(slideIndex + 1);
            }
        }, 4000)
        
        return () => clearInterval(intervalId);
    })



   

    const moveDot = index => {
        setSlideIndex(index)
    }
    
    


    return(
        <div className='container-images'>
            {dataSlider.map((obj , index) =>{
                return(
                    <div className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                        <img alt="" src={dataSlider[slideIndex]}/>
                    </div>
                )
            })}
            <div className="container-dots">
            {Array.from({length: 4}).map((item, index) => (
                <div 
                onClick={() => moveDot(index + 1)}
                className={slideIndex === index + 1 ? "dot active" : "dot"}
                ></div>
            ))}
        </div>
        </div>

        )
    }

export default Slider;