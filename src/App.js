import React, { useState, useEffect } from 'react'

import Search from './components/search'
import Result from './components/result'

const endpoint = 'https://api.weatherbit.io/v2.0/current?'
const key = 'fdb84bad1ce344ad8a664672b46d3cac'

function App() {
  const [coords, setCoords] = useState({})
  const [data, setData] = useState({})

  const updateCoords = (c) => {
    setCoords(c)
  }

  const getWeatherData = (c) => {
    if (coords.lat) {
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
          <h3>The premiere forecaster of conversations you won't care about</h3>
        </div>
        <Search updateCoords={updateCoords} />
        <Result data={data}/>
      </div>
    </div>
  );
}

export default App;
