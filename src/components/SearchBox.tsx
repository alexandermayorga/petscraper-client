import React, { KeyboardEvent } from "react";

type SearchBoxProps = {
  onSearch: Function;
  inputText: string;
  onInputChange: Function;
  onInputBlur: Function;
  classes?: string
};

export default function SearchBox(props: SearchBoxProps) {
  const { onSearch, inputText, onInputChange, onInputBlur, classes = "" } = props;

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSearch(inputText);
  };

  const handleSearch = () => {
    onSearch(inputText);
  };

  return (
    <div className={`input-group ${classes}`}>
      <input
        type="text"
        className="form-control"
        placeholder="Search by Breed"
        aria-label="Search by Breed"
        value={inputText}
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
        onKeyUp={handleKeyPress}
        onBlur={handleSearch}
      />
      <button className="btn btn-primary" type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
