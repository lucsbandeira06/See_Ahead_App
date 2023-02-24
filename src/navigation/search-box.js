import React from "react"
import { useState } from "react";
import { GEO_API_URL, geoApiOptions } from "../searchBarAPIconfig";
import { AsyncPaginate } from "react-select-async-paginate";

export default function SearchBox({onSearchChange}) {

    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
      return fetch(
          `${GEO_API_URL}/cities?minPopulation=5000&namePrefix=${inputValue}`,
          geoApiOptions
        )
          .then((response) => response.json())
          .then((response) => {
            return {
              options: response.data.map((city) => {
                return {
                  value: `${city.latitude} ${city.longitude}`,
                  label: `${city.name}, ${city.countryCode}`,
                };
              }),
            };
          });
      };
  
    const handleOnChange = (searchData) => {
      setSearch(searchData);
      onSearchChange(searchData);
    };
  
    return (
      <AsyncPaginate
        className="w-2/5 rounded-md h-auto shadow-lg border-2 border-orange-300"
        placeholder="What is your destination?"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    )
  
}