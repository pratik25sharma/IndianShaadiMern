import React from 'react';

const footerCompanyDetail = ['About Us', 'Terms &amp; Conditon', 'Privacy policy', 'Refund and Cancellation'];

const FooterCompanyDetails = () => {
    return (
        <div className="callouts">
            <ul>
                <span>Company Details</span>
                {
                    footerCompanyDetail.map(url => {
                        return (<li><a href="#">{url}</a></li>);
                    })     
                }
            </ul>
        </div>
    );
}

export default FooterCompanyDetails;