import './Slider.css'
import type { SliderImages } from '../../Models'

import { useState } from 'react'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


type SliderProps = {
    images: SliderImages[];
};


const Slider = ({ images }: SliderProps) => {


    let slideWidth = 1200
    let initialOffset = 200

    if (window.innerWidth < 900) {
        initialOffset = 10;
        slideWidth = 500
    }



    const [currentIndex, setCurrentIndex] = useState(0)
    console.log(initialOffset - currentIndex * slideWidth)


    const next = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1)
        } else {
            setCurrentIndex(0) // вернуться в начало
        }


    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        } else {
            setCurrentIndex(images.length - 1) // перейти на последний
        }
    }


    // setInterval(() => {
    //     next()
    // }, 3000);

    return (
        <div className="slider-container">
            <div
                className="slider"
                style={{
                    width: images.length * 100 + '%',
                    transform: `translateX(${initialOffset - currentIndex * slideWidth}px)`,
                    transition: '0.4s ease-in'
                }}
            >
                {images.map((item) => (
                    <div key={item.imgId} className="slide">
                        <img src={item.imgAddress} alt="" />
                    </div>
                ))}
            </div>


            <div className="dots-parent">
                {
                    images.map((item: SliderImages, index: number) => (

                        <div key={index}
                            className="dots"

                            onClick={() => setCurrentIndex(index)}

                            style={{
                                backgroundColor: index === currentIndex ? 'aqua' : 'white'
                            }}
                        >
                        </div>

                    ))
                }
            </div>


            <div className="buttons">
                <button onClick={prev} className="prev">
                    <ArrowBackIcon />
                </button>
                <button onClick={next} className="next">
                    <ArrowForwardIcon />
                </button>
            </div>



        </div>
    )
}

export default Slider