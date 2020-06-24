import React, { useState, useEffect } from 'react'

import {smalltalk} from '../static/smalltalk'
const iconEndpoint = 'https://www.weatherbit.io/static/img/icons/'

const Result = ({ data }) => {
  const [smalltalks, setSmalltalks] = useState(['s'])

  const getSmalltalk = (d) => {
    let st = []

    // get temp based smalltalk
    if(d.temp < 18) {
      st.push(getRandFromArray(smalltalk.temp.low))
    } else if ( d.temp >= 18 && d.temp <= 29) {
      st.push(getRandFromArray(smalltalk.temp.med))
    } else {
      st.push(getRandFromArray(smalltalk.temp.high))
    }

    // get weather based smalltalk
    smalltalk.weather.forEach(item => {
      if(new RegExp(item.tags.join("|"),'i').test(d.weather.description)) {
        st.push(item.phrase)
      }
    })
    return st

  }

  const getRandFromArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
  }
  useEffect(()=> {
    if (data.weather) {
      setSmalltalks(getSmalltalk(data))
    }
  }, [data])
  return data.weather ? (
    <div className="result-container">
      <h2>Weather in {data.city_name}, {data.country_code}</h2>
      <div className="icon-box">
        <img src={`${iconEndpoint}${data.weather.icon}.png`} alt=""/>
        <p>{data.temp}°C</p>
      </div>
      <p>{data.weather.description}</p>
      <h2>{randomPercent()} chance of hearing this from strangers:</h2>
      <ul>
        {smalltalks.map((s,i)=> (
          <li key={i}>"{s}"</li>
        ))}
      </ul>
    </div>
  ) : null

}

const randomPercent = () => {
  // between 61 and 100
  return Math.floor(Math.random() * (101 - 61 + 1) + 61) + "%";
}
export default Result;
