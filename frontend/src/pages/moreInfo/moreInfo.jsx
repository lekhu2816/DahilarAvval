import React from "react";
import "./moreInfo.css";
import userLogo from "../../assets/userLogo.png";
import { localityInfo,demographicInfo } from "../../content";
const MoreInfo = () => {

  return (
    <div className="more-info">
      <div className="village-head">
        <div className="head-image">
          <img src={userLogo} alt="" />
          <h2>Gram Pradhan</h2>
          <p>2022 - Present</p>
        </div>
        <div className="head-desc">
          <div className="head-name">
            <h3>Name</h3>
            <p>UserName</p>
          </div>
          <div className="contact-no">
            <h3>Contact No</h3>
            <p>+91 1234567890</p>
          </div>
        </div>
      </div>
    <div className="village-details">
      <div className="left">
        <h1>Dahilar Awwal Details</h1>
        {localityInfo.map((info,index)=>(
             <div key={index} className="details">
             <p>{info.key}</p>
             <p>{info.value}</p>
           </div>
        ))}
     
      </div>
      <div className="right">
      <h1>Dahilar Awwal 2011 Census Details</h1>
      {demographicInfo.map((info,index)=>(
             <div key={index} className="details">
             <p>{info.key}</p>
             <p>{info.value}</p>
           </div>
        ))}
      </div>
    </div>
    <div className="map-container">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4803.9566049119285!2d80.12281034096195!3d25.993983883039263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1728256663658!5m2!1sen!2sin"
        style={{ border: 0, width: '100%', height: '400px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    </div>
  );
};

export default MoreInfo;
