import React from "react";
import "./Footer.css";

export const Footer = ({ completedTODO, totalTODO }) => {
  return (
    <div className="footer">
      <span className="item">Completed TODO :{completedTODO}</span>
      <span className="item">Completed TODO :{totalTODO}</span>
    </div>
  );
};
