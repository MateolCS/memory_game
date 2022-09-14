import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__content">
        Made by @MateoICS{" "}
        <a href="https://github.com/MateolCS" className="footer__link">
          <FaGithub />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
