import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="d-flex flex-column h-100">

{/* <!-- FOR DEMO PURPOSE --> */}
<section className="hero text-white py-5 flex-grow-1">
    <div className="container py-4">
        <div className="row">
            <div className="col-lg-6">
                <h1 className="display-4">Medical Health Care</h1>
                <p className="fst-italic text-muted">Find Medical Insurance In Us. Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources. Results & Answers. <a className="text-primary" href="#" target="_blank">Healthcare</a></p>
            </div>
        </div>
    </div>
</section>


    {/* <!-- FOOTER --> */}
<footer className="w-100 py-4 footer flex-shrink-0">
    <div className="container py-4">
        <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
                <h5 className="h1 text-white">FB.</h5>
                <p className="small text-muted">Find Medical Insurance In Us. Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources. Results & Answers.</p>
                <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a className="text-primary" href="#s">HealthCare.com</a></p>
            </div>
            <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">Quick links</h5>
                <ul className="list-unstyled text-muted">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#departments">Get started</a></li>
                    <li><a href="#faq">FAQ</a></li>
                </ul>
            </div>
            <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">Quick links</h5>
                <ul className="list-unstyled text-muted">
                    <li><a href="#cc">Contacts</a></li>
                    <li><a href="#M">Map</a></li>
                    <li><a href="#ss">Service</a></li>
                    <li><a href="#ss">details</a></li>
                </ul>
            </div>
            <div className="col-lg-4 col-md-6">
                <h5 className="text-white mb-3">Newsletter</h5>
                <p className="small text-muted">Find Medical Insurance In Us. Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources. Results & Answers.</p>
               
                
            </div>
        </div>
    </div>
</footer>
</div>
        </div>
    );
};

export default Footer;