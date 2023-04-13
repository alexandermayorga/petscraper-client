import React, { useState } from "react";
import SearchBox from "./SearchBox";

type FilterBarProps = {
  results: number;
  sexValue: string;
  onSearch: Function;
  onSexFilterChange: Function;
  onFiltersReset: Function;
};

export default function FilterBar(props: FilterBarProps) {
  const { results, sexValue, onSearch, onSexFilterChange, onFiltersReset } =
    props;

  const [inputText, setInputText] = useState("");

  const handleResetClick = () => {
    setInputText("");
    onFiltersReset();
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="d-flex flex-wrap flex-lg-nowrap gap-lg-3">

          <div className="flex-grow-1 mb-3 flex-basis-100 mb-sm-0 mb-md-3 mb-lg-0 flex-basis-lg-auto">
            <strong>Results:</strong> {results}
          </div>

          <div className="flex-grow-1 mb-3 mb-md-0 flex-basis-md-100 mb-md-3 mb-lg-0 flex-basis-lg-auto">
            <div className="input-group">
              <label className="input-group-text" htmlFor="sex_select" >
                <strong>Sex</strong>
              </label>
              <select
                id="sex_select"
                className="form-select"
                aria-label="Sex Filter"
                value={sexValue}
                onChange={(e) => {
                  onSexFilterChange(e.target.value);
                }}
              >
                <option value={"all"}>
                  All
                </option>
                <option value={"female"}>Female</option>
                <option value={"male"}>Male</option>
              </select>
            </div>

            {/* <label htmlFor="sex_select" style={{ marginRight: "10px" }}>
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
            </select> */}
          </div>

          <div className="flex-grow-1 flex-basis-lg-50">
            <div className="d-flex flex-wrap flex-md-nowrap gap-3 gap-lg-2">
              <SearchBox
                inputText={inputText}
                onInputChange={setInputText}
                onSearch={onSearch}
                onInputBlur={onSearch}
              />
              <button
                type="button"
                className="btn btn-danger flex-basis-100 flex-basis-md-25"
                onClick={handleResetClick}
              >
                Reset
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
