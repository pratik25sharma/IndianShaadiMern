import React from 'react';
import Slider from "react-slick";

import '../css/banner.css';
import Banner_1 from '../banner-1.jpg';
import BG_1 from '../bg-1.jpg';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
    pauseOnHover:false
};

const Banner = () => {
    return (
        <div className="banner">
            <ul className="fade slider">
                <Slider {...settings} >
                    <li>
                        <img src={Banner_1} alt="Home banner" />
                        <div className="banner_head">
                            <span className="head">Meet Big And Beautiful Love Here!</span>
                            <a href="javascript:void(0);">Join Now <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </li>
                    <li>
                        <img src={BG_1} alt="Home banner" />
                        <div className="banner_head">
                            <span className="head">Meet Big And Beautiful Love Here!</span>
                            <a href="javascript:void(0);">Join Now <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </li>
                </Slider>
            </ul>
        </div>
    );
}

export default Banner;