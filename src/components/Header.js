import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <img src="images/logo.svg" alt="" />
        <h2 className="header-content-h1"> A history of everything you copy</h2>
        <p className="header-content-p">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <div className="buttons">
          <button className="button-1">Download for iOS</button>
          <button className="button-2">Download for Mac</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
