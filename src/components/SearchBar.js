import React, { useState } from "react";

const SearchBar = ({ onSubmitForm }) => {
  const [val, setVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitForm(val);
    setVal("");
  };

  return (
    <div className="ui segment search-bar">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Search For a Video</label>
          <input
            type="text"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
