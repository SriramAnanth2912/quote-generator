import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer">
      <div className="footer-title" title="created by lingala Sriram Ananth">
        Copyright &copy; {year} - L.Sriram Ananth
      </div>
    </div>
  );
};

export default Footer;
