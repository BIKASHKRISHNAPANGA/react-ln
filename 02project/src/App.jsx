import { useState } from 'react'
import './App.css'

function App() {
const [counter, setCounter]=useState(0);
  const addValue=()=>{setCounter(counter+1); console.log(counter)};
  const reduceValue=()=>{setCounter(counter-1)};

  return (
    <>
     <h1>React cource with bikash {counter}</h1>
     <h2>Counter value:{counter}</h2>
     <button onClick={addValue}>add value</button>
     {"  "}
     <button onClick={reduceValue}>remove value</button>
     <p>footer:{counter}</p>
    </>
  )
}

export default App
