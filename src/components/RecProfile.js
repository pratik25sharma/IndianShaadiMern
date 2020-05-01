import React from 'react';
import Slider from "react-slick";

import '../css/recProfile.css';
import '../css/slick.css';
import prf1 from '../prf_1.jpg';

const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

const RecProfile = () => {
    return (
        <section className="recommended_Profile">
            <div className="wrapper">
            <ul >
            <Slider {...settings} className="slider responsive">
                
                    <li>
                        <img src={prf1} alt="" />
                        <p>Steve Roger</p>
                        <span>Age: 28yrs old</span>
                    </li>
                    <li>
                        <img src={prf1} alt="" />
                        <p>Steve Roger</p>
                        <span>Age: 28yrs old</span>
                    </li>
                    <li>
                        <img src={prf1} alt="" />
                        <p>Steve Roger</p>
                        <span>Age: 28yrs old</span>
                    </li>
                    <li>
                        <img src={prf1} alt="" />
                        <p>Steve Roger</p>
                        <span>Age: 28yrs old</span>
                    </li>
                    <li>
                        <img src={prf1} alt="" />
                        <p>Steve Roger</p>
                        <span>Age: 28yrs old</span>
                    </li>
                
                </Slider>
                </ul>
            </div>
        </section>
    );

}

export default RecProfile;