import React, { useEffect, useState } from 'react'
import { Bars } from '../components'
import { getWeatherData } from '../utils/queries/Weather'

const Main = () => {
  const dimensions = {
    height: 600,
    width:800,
  }

  const [data, setData] = useState<{dt:Date,humidity:number}[]>([])
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).

  const weatherData = getWeatherData(45.43,-122.77,['current','hourly','daily','alerts']).hourly
  useEffect(()=>{
    if (typeof weatherData !=='undefined')
    setData(()=>weatherData.map((d)=>({
      dt:new Date(d.dt),
      humidity:d.humidity
    })))
  },[weatherData])
  
  return (    <div className="App">
  <header className="App-header">
    <Bars
      data={data}
      dimensions={dimensions}
      />
  </header>
</div>)
}

export default Main