import React from 'react';

const footerMoreInformation= ['Add Your Sucess Story', 'Success Stories', 'Packages', 'Reviews and Ratings'];

const FooterMore = () => {
    return (
        <div className="callouts">
            <ul>
                <span>More</span>
                {
                    footerMoreInformation.map(url => {
                        return (<li><a href="#">{url}</a></li>);
                    })     
                }
            </ul>
        </div>
    );
}

export default FooterMore;