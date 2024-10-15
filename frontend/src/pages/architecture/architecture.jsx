import React from "react";
import "./architecture.css";
import { architecture } from "../../content";
import InfoCard from "../../component/infoCard/infoCard";
const Architecture = () => {
  return (
    <div className="architecture">
                <div className="architecture-title">
          <h1>Dahilar Awwal Architecture</h1>
        </div>
      <div className="architecture-desc">

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nam
          magni eligendi, doloribus totam incidunt deserunt velit, voluptatibus
          saepe quam amet ad dolore nobis sunt temporibus porro nesciunt,
          voluptas necessitatibus.
        </p>
      </div>

      <div className="architecture-info">
        {architecture.map((info, index) => {
          return <InfoCard key={index} info={info} />;
        })}
      </div>
    </div>
  );
};

export default Architecture;
