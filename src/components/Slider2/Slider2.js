import React from "react";
import { useState, useEffect } from "react";
import './Slider2.css'
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



    /*const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const previousSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    */

    const moveDot = index => {
        setSlideIndex(index)
    }
    
    /*
    const switchImage = () =>{
        if (slideIndex < dataSlider.length - 1) {
                setSlideIndex(slideIndex + 1);
          } else if (slideIndex === dataSlider.length){
            setSlideIndex(1);
          }
        }

    const componentDidMount = () => {
            setInterval(switchImage, 2000);
        }
    */


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
            {Array.from({length: 3}).map((item, index) => (
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