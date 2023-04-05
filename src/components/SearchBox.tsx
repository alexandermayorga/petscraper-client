import React,{ KeyboardEvent } from 'react'

type SearchBoxProps = {
    onSearch: Function,
    inputText:string,
    onChange: Function
}

export default function SearchBox(props:SearchBoxProps) {
    const {onSearch,inputText,onChange} = props;

    const handleKeyPress = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") onSearch(inputText);
    }

    const handleClick = () =>{
        onSearch(inputText)
    }

    return (
        <div className="input-group">
            <input 
            className="form-control" 
            type="text" 
            placeholder="Search by Breed"
            aria-label="Search by Breed"
            value={inputText}
            onChange={(e)=>{onChange(e.target.value)}}
            onKeyUp={handleKeyPress} //Deprecated
            />
            <div className="input-group-append">
                <button 
                type="button"
                className="btn btn-primary" 
                onClick={handleClick}
                >
                    Search
                </button>
            </div>
            
        </div>
    )
}
