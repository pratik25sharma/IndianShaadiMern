import React from "react";

import FooterHelp from "./FooterHelp";
import FooterCompanyDetails from "./FooterCompanyDetails";
import FooterInformation from "./FooterInformation";
import FooterMore from "./FooterMore";
import SubFooter from './SubFooter';

import '../../css/footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <div className="footer">
                    <FooterHelp />
                    <FooterCompanyDetails />
                    <FooterInformation />
                    <FooterMore />
                </div>
                <SubFooter />
            </div>
        </footer>
    );
};

export default Footer;
