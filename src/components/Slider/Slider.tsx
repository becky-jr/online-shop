import './Slider.css'
import slider1 from '../../images/slider.png'
import type { SliderImages } from '../../Models'
import { useState } from 'react'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Slider = () => {




    const sliderImages: SliderImages[] = [
        {
            imgId: 1,
            imgAddress: slider1
        },
        {
            imgId: 2,
            imgAddress: slider1
        },

        {
            imgId: 3,
            imgAddress: slider1
        },

    ]


    const [current, setCurrent] = useState(200);


    // const prev = () => {
    //     // if (current < (sliderImages.length - 2) * 1200) {
    //     //     setCurrent(-1000)
    //     // }
    //     // else {
    //     //     setCurrent((prev) => (prev + 1200))
    //     // }


    //     // if (current < -((sliderImages.length) * 1000)) {
    //     //     // если на первом слайде → прыгаем в конец
    //     //     setCurrent((sliderImages.length - 2) - 200)

    //     // } else {
    //     //     setCurrent((prev) => prev + slideWidth)
    //     // }
    //     console.log(current);

    //     console.log(-((sliderImages.length - 1) * slideWidth));


    //     if (current === -1000) {
    //         // если мы на первом слайде → прыгаем в конец
    //         setCurrent(-((sliderImages.length - 2) * slideWidth))
    //     } else {
    //         setCurrent((prev) => prev + slideWidth)
    //     }
    // }


    // const next = () => {
    //     console.log(current);
    //     if (current < -((sliderImages.length - 1) * 1000)) {
    //         // если на первом слайде → прыгаем в конец
    //         setCurrent((sliderImages.length - 2) + 200)


    //     } else {



    //         setCurrent((prev) => prev - slideWidth)
    //     }
    // }






    // style={{ width: (sliderImages.length - 1) * 100 + '%' }}

    const prev = () => {
        console.log(current);
        if (current === 200) {
            // если на первом слайде → прыгаем в конец
            setCurrent(-((sliderImages.length - 1) * 1200) - 1000 + 1200);
        } else {
            setCurrent(current + 1200);
        }
    };

    const next = () => {
        // console.log(current);
        // console.log(((sliderImages.length - 1) * 1200) - 1000);
        if (current === -((sliderImages.length - 2) * 1200) - 1000) {
            // если на последнем слайде → прыгаем в начало
            setCurrent(200);
        } else {
            setCurrent(current - 1200);
        }
    };

    return (
        <>

            <div className="slider-container">

                <div className="slider" style={{ transform: `translateX(${current}px)` }} >
                    {sliderImages.map((item) => (
                        <div className="slider-img" key={item.imgId}>
                            <img src={item.imgAddress} alt="" />
                        </div>
                    ))}
                </div>

                <button className="prev" onClick={prev}>
                    <ArrowBackIcon />
                </button>

                <button className="next" onClick={next}>
                    <ArrowForwardIcon />
                </button>

            </div>

        </>
    )
}

export default Slider