import React from 'react';
import '../css/advertiser.css';
const advertiserOptions = ['New Advertiser', 'Login Advertiser', 'Video'];

const Advertiser = () => {
    return (
        <div className="adversiser">
            <div className="wrapper">
                <span>Advertise Your Products/Brand/Shop/Service On Our Website.</span>
                {advertiserOptions.map(option => {
                    return (<a href="javascript:void(0);">{option}</a>)
                })}
            </div>
        </div>
    );
};

export default Advertiser;