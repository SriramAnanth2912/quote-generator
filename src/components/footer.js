import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer">
      {" "}
      <hr></hr>
      <div>
        <div className="footer-title">Copyright &copy; {year} - L.Sriram Ananth</div>
      </div>
    </div>
  );
};

export default Footer;
