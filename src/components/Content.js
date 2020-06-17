import React from "react";
import MainContent from "./MainContent";
import SideContent from "./SideContent";

const Content = () => {
  return (
    <div className="content">
      <div className="mainContent">
        <MainContent />
      </div>
      <div className="sideContent">
        <SideContent />
      </div>
    </div>
  );
};

export default Content;
