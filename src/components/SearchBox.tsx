import React, { KeyboardEvent } from "react";

type SearchBoxProps = {
  onSearch: Function;
  inputText: string;
  onChange: Function;
  classes?: string
};

export default function SearchBox(props: SearchBoxProps) {
  const { onSearch, inputText, onChange, classes = "" } = props;

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSearch(inputText);
  };

  const handleClick = () => {
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
          onChange(e.target.value);
        }}
        onKeyUp={handleKeyPress}
      />
      <button className="btn btn-primary" type="button" onClick={handleClick}>
        Search
      </button>
    </div>
  );
}
