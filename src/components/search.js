import React, { useState, useEffect } from 'react'
import MapboxAutocomplete from 'react-mapbox-autocomplete'

const sec = "eyJ1IjoiY2xhaXJlZnJvZnJvIiwiYSI6ImNrYnRsYnJvNTBhNzUyeW53OXBkNGF0bncifQ.x0Vx7b94vpi_T9YEmDpsnw"

const Search = ({ updateCoords }) => {


  const onSuggestionSelect = (result, lat, lon,) => {
    updateCoords({lat, lon})
  }

  return (
    <div id="geocoder" className="search-container">
      <h2>Find a place</h2>
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
