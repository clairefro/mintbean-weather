import React, { useState, useEffect } from 'react'

const iconEndpoint = 'https://www.weatherbit.io/static/img/icons/'
const Result = ({ data }) => {

  return data.weather ? (
    <div className="result-container">
      <h2>Weather in {data.city_name}, {data.country_code}</h2>
      <div className="icon-box">
        <img src={`${iconEndpoint}${data.weather.icon}.png`} alt=""/>
        <p>{data.temp}°C</p>
      </div>
      <p>{data.weather.description}</p>
    </div>
  ) : null

}

export default Result;
