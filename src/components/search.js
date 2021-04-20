import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  useEffect(() => {
    console.log("只跑第一次");
  }, []); //傳入空值時只跑第一次
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
