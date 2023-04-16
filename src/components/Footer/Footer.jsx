import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Muhammad.irfantsani@gmail.com</span>
        <div className="f-icons" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "10px" }}>
          <div style={{ display: "flex", gap: "50px" }}>
            <Insta color="white" size={"3rem"} />
            <Facebook color="white" size={"3rem"} />
            <Gitub color="white" size={"3rem"} />
          </div>
          <span>Copyright 2023 by created Hafidtsh</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
