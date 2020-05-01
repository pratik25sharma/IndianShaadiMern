import React from 'react';

const helpFooterUrls = ['Contact Us', 'Need Help', 'Customer Support', 'FAQ'];

const FooterHelp = () => {
    return (
        <div className="callouts">
            <ul>
                <span>Need Help</span>
                {
                  helpFooterUrls.map(url => {
                    return (<li><a href="#">{url}</a></li>);
                  })     
                }
            </ul>
        </div>
    );
};

export default FooterHelp;