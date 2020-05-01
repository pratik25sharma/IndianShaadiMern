import React from 'react';

const footerCompanyInformation = ['Disclaimers', 'report misuse', 'Blog', 'Advertise With Us'];

const FooterInformation = () => {
    return (
        <div className="callouts">
            <ul>
                <span>Information</span>
                {
                    footerCompanyInformation.map(url => {
                        return (<li><a href="#">{url}</a></li>);
                    })     
                }
            </ul>
        </div>
    );
}

export default FooterInformation;