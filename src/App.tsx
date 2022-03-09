import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Bars from './Bars';

interface AppProps {}

function App({}: AppProps) {
  const dimensions = {
    height: 600,
    width:400,
  }
  const [data, setData] = useState<number[]>([])
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 10);
    if (data.length < 100){
      data.push(Math.random())
    } else {
      const newData = data.splice(1,100)
      setData(newData)
    }
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
        <Bars
          data={data}
          dimensions={dimensions}
        />
      </header>
    </div>
  );
}

export default App;
