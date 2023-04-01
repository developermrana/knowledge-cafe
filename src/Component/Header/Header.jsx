import React from "react";
import "./Header.css";
import header_img from "../../assets/images/user_4.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <h1>Job Instruction</h1>
        </div>
        <div>
          <img src={header_img} alt="header img" />
        </div>
      </div>
      <div>
        <hr />
      </div>
    </>
  );
};

export default Header;
