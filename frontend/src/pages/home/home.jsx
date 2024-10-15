import React, { useRef } from "react";
import "./home.css";
import Card from "../../component/card/card";
import { naturalBeauty ,popularEvents,historicalArchitecture } from "../../content";
const Home = () => {
  const exploreRef=useRef(null);
  const scrollToExploreSection=()=>{
   exploreRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="info">
          <h1>DAHILAR AWWAL</h1>
          <h2> Where nature and culture come together</h2>
          <button onClick={scrollToExploreSection}>EXPLORE</button>
        </div>
      </div>
      <div ref={exploreRef} className="section-explore">
        <h1>Explore Our Natural Treasures</h1>
        <div className="image-gallery">
        {naturalBeauty.map((info,index)=>{
              return(
             <Card key={index} info={info}/>
              )
        })}
        </div>
      </div>
      {/* Popular Events */}

      <div className="section-explore">
        <h1> Popular Events</h1>
        <div className="image-gallery">
        {popularEvents.map((info,index)=>{
             return(
              <Card key={index} info={info}/>
               )
        })}
        </div>
      </div>
      {/* Our historical facts */}
      <div className="section-explore">
        <h1>Historical Architecture</h1>
        <div className="image-gallery">
        {historicalArchitecture.map((info,index)=>{
             return(
              <Card key={index} info={info}/>
               )
        })}
        </div>
      </div>
    </div>
  );
};

export default Home;
