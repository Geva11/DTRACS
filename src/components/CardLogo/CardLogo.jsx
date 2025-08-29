import React, { useState } from "react";
import { useNavigate } from "react-router-dom";   // 👈 import useNavigate
import "./CardLogo.css";
import BlueLogo from "../../assets/images/sgod-blue.png";
import WhiteLogo from "../../assets/images/sgod-white.png";

const CardLogo = () => {
  const [hovered, setHovered] = useState(false);
  const [hoveredOSDS, setHoveredOSDS] = useState(false);
  const [hoveredCID, setHoveredCID] = useState(false);
  const navigate = useNavigate();

  return (
  <div className="card-container">
    {/* SGOD Card */}
      <div
        className="card"
        style={{ backgroundImage: `url(${hovered ? WhiteLogo : BlueLogo})` }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => navigate("/SGOD")}   // 👈 navigate when clicked
    >
        <div className={`card-text ${hovered ? "hovered" : ""}`}>
          <h1 className="title">
            School Governance and <br /> Operations Division
          </h1>
        </div>
      </div>

    {/* CID Card */}
      <div
        className="card"
        style={{ backgroundImage: `url(${hoveredCID ? WhiteLogo : BlueLogo})` }}
        onMouseEnter={() => setHoveredCID(true)}
        onMouseLeave={() => setHoveredCID(false)}
        onClick={() => navigate("/SGOD")}   // navigate to CID page on click
      >
        <div className={`card-text ${hoveredCID ? "hovered" : ""}`}>
          <h1 className="title">
            Curriculum Implementation <br /> Division
          </h1>
        </div>
      </div>

      {/* OSDS Card */}
      <div
        className="card"
        style={{ backgroundImage: `url(${hoveredOSDS ? WhiteLogo : BlueLogo})` }}
        onMouseEnter={() => setHoveredOSDS(true)}
        onMouseLeave={() => setHoveredOSDS(false)}
        onClick={() => navigate("/SGOD")}   // navigate to CID page on click
      >
        <div className={`card-text ${hoveredOSDS ? "hovered" : ""}`}>
          <h1 className="title">
            Office of the Schools <br /> Division Superintendent
          </h1>
        </div>
      </div>

  </div>
  );
};

export default CardLogo;