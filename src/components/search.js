import React, { useState, useEffect } from 'react'
import MapboxAutocomplete from 'react-mapbox-autocomplete'

const sec = "eyJ1IjoiY2xhaXJlZnJvZnJvIiwiYSI6ImNrYnRsYnJvNTBhNzUyeW53OXBkNGF0bncifQ.x0Vx7b94vpi_T9YEmDpsnw"

const Search = ({ updateCity }) => {


  const onSuggestionSelect = (result) => {
    updateCity(result)
  }

  return (
    <div id="geocoder" className="search-container">
      <h2>Find your city</h2>
      <MapboxAutocomplete
        publicKey={`pk.${sec}`}
        inputClass='search'
        onSuggestionSelect={onSuggestionSelect}
        resetSearch={false}
      />
    </div>
  )
}

export default Search;
