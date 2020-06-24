import React, { useState, useEffect } from 'react'

import Search from './components/search'
import Result from './components/result'

const endpoint = 'https://api.weatherbit.io/v2.0/current?'
const key = 'fdb84bad1ce344ad8a664672b46d3cac'

function App() {
  const [coords, setCoords] = useState({ lat:0, lon:0})
  const [data, setData] = useState({})

  const updateCoords = (c) => {
    setCoords(c)
  }

  const getWeatherData = (c) => {
    console.log(`getting weather from ${c}`)
    const url = `${endpoint}key=${key}&lat=${c.lat}&lon=${c.lon}`
    fetch(url)
      .then(res=> res.json())
      .then(data=> {
        setData(data.data[0])
        console.log(data.data[0])
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if (coords !== '') {
      getWeatherData(coords)
    }
  }, [coords])

  return (
    <div className="App">
      <div className="container">
        <div className="title">
          <h1>SmallTalk</h1>
          <h2>The premiere forecaster of conversations you don't care about</h2>
        </div>
        <Search updateCoords={updateCoords} />
      </div>
    </div>
  );
}

export default App;
