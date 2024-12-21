import React from 'react';

import './App.css';
import {useState} from 'react'

function App() {

const [counter, setCounter] = useState(0)

const handleMinus = () => {

  if (counter > 0) {
    setCounter(counter - 1)
  }

}
const handlePlus = () => {

  if (counter >= 0) {
    setCounter(counter + 1)
  }
}


  return (
    <div className="App">
      <h3>React Likes</h3>
     <h4 >{counter}</h4>
     <button onClick={handlePlus}>+</button>
     <button  onClick={handleMinus}>-</button>
     
    </div>
  );
}

export default App;
