
import React from "react";
import "./HomCard.css";

const HomCard = () => {
  return (
    <div className="homcard-container">
      <div className="homcard loading">
        <img
          src="https://i.ibb.co/7j61wMw/aarohan.jpg"
          className="homimage"
          alt="Aarohan"
        />
      </div>
      <div className="homcard loading">
        <img src="./SDV.jpg" className="homimage" alt="SDV" />
      </div>
      <div className="homcard loading">
        <img src="./Tedx1.png" className="homimage" alt="TEDx" />
      </div>
    </div>
  );
};

export default HomCard;
