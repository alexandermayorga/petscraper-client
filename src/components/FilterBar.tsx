import React, { useState } from "react";
import SearchBox from "./SearchBox";

type FilterBarProps = {
  results:number,
  sexValue:string,
  onSearch:Function,
  onSexFilterChange:Function,
  onFiltersReset:Function,
}

export default function FilterBar(props:FilterBarProps) {
  const {results,sexValue,onSearch,onSexFilterChange,onFiltersReset} = props;
  
  const [inputText, setInputText] = useState("");

  const handleResetClick = () => {
    setInputText("");
    onFiltersReset();
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="filterBar_wrapper d-flex justify-content-between flex-wrap">
          <div className="mb-4 mb-sm-0">
            <strong>Results:</strong> {results}
          </div>
          <div className="mb-4 mb-sm-0">
            <div className="d-flex">
              <SearchBox
                onSearch={onSearch}
                inputText={inputText}
                onChange={setInputText}
              />
              <button
                type="button"
                className="btn btn-link"
                onClick={handleResetClick}
              >
                Reset
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="sex_select" style={{ marginRight: "10px" }}>
              <strong>Sex</strong>
            </label>
            <select
              value={sexValue}
              onChange={(e) => {
                onSexFilterChange(e.target.value);
              }}
            >
              <option value={"all"}>All</option>
              <option value={"female"}>Female</option>
              <option value={"male"}>Male</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
