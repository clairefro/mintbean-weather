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
      <h2>{randomPercent()} chance of hearing this from strangers:</h2>
    </div>
  ) : null

}

const randomPercent = () => {
  // between 61 and 100
  return Math.floor(Math.random() * (101 - 61 + 1) + 61) + "%";
}
export default Result;
