import React from "react"

export default function SearchBox({className, placeholder, onChangeHandler}) {

    return (
        <input 
        className={`search-box ${className}`}
        type='search' 
        placeholder={placeholder} 
        onChange= {onChangeHandler}
        />  
    )
}