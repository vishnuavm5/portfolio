import React from "react";
import Socio from "./Socio";

const Footer = () => {
  const links = [
    { link: "https://github.com/vishnuavm5", network: "github" },
    {
      link: "https://www.linkedin.com/in/vishnu-a-11a97b17a",
      network: "linkedin",
    },
    { link: "vishnuavm5@gmail.com", network: "mailto" },
    {
      link: "https://twitter.com/AvishnuM?t=V5xFjUF8U_XCNew4BziRHg&s=09",
      network: "twitter",
    },
    { link: "https://hashnode.com/@arvikh", network: "sharethis" },
  ];
  return (
    <footer className="bg-black text-white py-6" id="contact">
      <div className="container mx-auto flex justify-center">
        <div className="flex space-x-4"></div>
        {links.map((data) => {
          return <Socio link={data.link} network={data.network} />;
        })}
      </div>
    </footer>
  );
};

export default Footer;
