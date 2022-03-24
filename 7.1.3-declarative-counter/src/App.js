import React,{useState} from 'react'
import './App.css';

function App() {
  let [counter,changeCounter] = useState(1);
  window.changeCounter = changeCounter;
  return (
    <div className="App">
        <h1>{counter}</h1>  
    </div>
  );
}

export default App;
