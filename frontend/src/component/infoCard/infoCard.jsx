import React, { useState } from "react";
import "./infoCard.css";
import school1 from "../../assets/school1.jpg";
import school2 from "../../assets/school2.jpg";
import school3 from "../../assets/school3.jpg";
import school4 from "../../assets/school4.jpg";
const obj = {
  title: "Primary School",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maiores ullam provident possimus non quibusdam reiciendis obcaecati eaque adipisci consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maiores ullam provident possimus non quibusdam reiciendis obcaecati eaque adipisci consequatur.Nihil maiores ullam provident possimus non quibusdam reiciendis obcaecati eaque adipisci consequatur. ",
  images: [school1, school2, school3, school4],
};
const InfoCard = ({info}) => {
  const [imgIndex, setImgIndex] = useState(0);
  const handleOnClick = (index) => {
    setImgIndex(index);
  };
  return (
    <div className="info-card">
      <div className="info-title">
        <h1>{info.title}</h1>
      </div>
      <div className="info-desc">
        <div className="info-section-left">
          <div className="top-img">
            <img src={info.images[imgIndex]} alt="" />
          </div>
          <div className="bottom-img">
            {info.images.map((img, index) => {
              return (
                <div
                  onClick={() => handleOnClick(index)}
                  className={`${imgIndex === index ? "setbg" : ""} img-block`}
                >
                  <img src={img} alt="image" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="info-section-right">
          <p>{info.description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
