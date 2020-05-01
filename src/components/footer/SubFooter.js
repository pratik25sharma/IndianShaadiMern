import React from 'react';
import '../../css/subFooter.css';
import logo from '../../logo.png';

const footerMoreInformation= ['fa-facebook-f', 'fa-twitter', 'fa-youtube'];


const FooterMore = () => {
    return (
        <div className="sub_footer">
            <span>
                <img src={logo} width="70" alt="" /> 
                Rishtey Indian is the trade mark Of NISWARTH SEWA-110014
            </span>
            <ul>
                {
                    footerMoreInformation.map(url => {
                        return (<li><a href="#"><i className={`fab ${url}`}></i></a></li>);
                    })     
                }
                <p>© 2018 - 2020 rishteyindian.com</p>
            </ul>
        </div>
    );
}

export default FooterMore;