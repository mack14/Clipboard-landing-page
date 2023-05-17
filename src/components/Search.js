import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="search--img">
        <img src="images/image-computer.png" alt="" />
      </div>
      <div className="search--content">
        <div className="search--content--1">
          <h2>Quick Search</h2>
          <p>
            Easily search your snippets by content, category, web address,
            application, and more.
          </p>
        </div>
        <div className="search--content--2">
          <h2>iCloud Sync</h2>
          <p>Instantly saves and syncs snippets across all your devices.</p>
        </div>
        <div className="search--content--3">
          <h2> Complete History</h2>
          <p>
            Retrieve any snippets from the first moment you started using the
            app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Search;
