import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="section-top">
        <div className="section-left">
        <h4>Dahilar Awwal</h4>
            <p>Kanpur Nagar Uttar Pradesh</p>
            <p>Phone: +91 12345 67890</p>
            <p>Email: info@dahilarawwal.com</p>
        </div>
        
        <div className="section-middle">
        <h4>Quick Links</h4>
            <ul>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/event'}>Events</Link></li>
                <li><Link to={'/moreInfo'}>More</Link></li>
            </ul>
        </div>

        <div className="section-right">
        <h4>Follow Us</h4>
            <ul>
                <li id="facebook"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li id="instagram"><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li id="youtube"><a href="#"><i className="fa-brands fa-youtube"></i></a></li>

            </ul>
        </div>
      </div>
      <hr />
      <div className="section-bottom">
        &copy; 2023 Dahilar Awwal. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
