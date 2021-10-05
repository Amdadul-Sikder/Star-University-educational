import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4>Have a Questions?</h4>
                        <p>
                            <i class="fas fa-map-marker-alt"></i>
                            Gabtoli, Dhaka
                        </p>
                        <p>
                            <i class="fas fa-phone"></i>
                            +880123456789
                        </p>
                        <p>
                            <i class="fas fa-envelope"></i>
                            contact@email.com
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h4>Links</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Subscribe with us</h4>
                        <input type="email" />
                        <br />
                        <button className="submit" type="submit">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;