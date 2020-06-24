import React, { useState, useEffect } from 'react'

import {smalltalk} from '../static/smalltalk'
import {speak} from '../lib/speak'
const iconEndpoint = 'https://www.weatherbit.io/static/img/icons/'

const Result = ({ data }) => {
  const [smalltalks, setSmalltalks] = useState([])

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
    return shuffle(st).slice(0,rand(1,3))

  }

  const getRandFromArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
  }

  const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const shuffle = (arr) => {
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
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
      <button onClick={()=> speak(smalltalks.join(' '), 'en-GB')}>Get it out of the way now</button>
    </div>
  ) : null

}

const randomPercent = () => {
  // between 61 and 100
  return Math.floor(Math.random() * (101 - 61 + 1) + 61) + "%";
}
export default Result;
