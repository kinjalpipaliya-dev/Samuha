import React, { FC } from "react";
import Header from "../../Components/Header/Header";
import "./style.css";
const LandingPage: FC = () => {
  return <div className="landing-main">
    <Header isLandingScreen={true}/>
  </div>;
};

export default LandingPage;
