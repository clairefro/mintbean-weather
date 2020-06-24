import React, { useState, useEffect } from 'react'

import Search from './components/search'
import Result from './components/result'

const endpoint = 'api.openweathermap.org/data/2.5/weather?q='
const key = 'bbe430e35346bd7c152eca9e7e756412'

function App() {
  const [city, setCity] = useState('')
  const [data, setData] = useState({})

  const updateCity = (c) => {
    setCity(c)
  }

  const getWeatherData = (c) => {
    console.log(`getting weather from ${c}`)
    const url = `${endpoint}${city}&appiId=${key}`
    fetch(url)
      .then(res=> console.log(res))
      // .then(data=> console.log(data))
      // .catch(err => console.log(err))
  }

  useEffect(() => {
    if (city !== '') {
      getWeatherData(city)
    }
  }, [city])

  return (
    <div className="App">
      <div className="container">
        <div className="title">
          <h1>SmallTalk</h1>
          <h2>The premiere forecaster of conversations you don't care about</h2>
        </div>
        <Search updateCity={updateCity} />
      </div>
    </div>
  );
}

export default App;
