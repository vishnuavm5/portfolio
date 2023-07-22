import React from "react";
import { SocialIcon } from "react-social-icons";

const Socio = (props) => {
  return (
    <div>
      <SocialIcon
        url={props.link}
        network={props.network}
        fgColor="white"
        bgColor="black"
        style={{ height: "3rem", width: "3rem" }}
      />
    </div>
  );
};

export default Socio;
