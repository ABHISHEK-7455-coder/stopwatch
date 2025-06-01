import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  let timeRef = useRef(null)

  function handleStart(){
    timeRef.current = setInterval(() => {
      setTime(time => time + 1)
    }, 1000)
  }

  function handleStop(){
    clearInterval(timeRef.current);
    timeRef.current = null;
  }

  function handleReset(){
    handleStop();
    setTime(0);
  }

  return (
    <>
       <h1>Stopwatch : {time} seconds</h1>
       <button onClick={handleStart}>START</button>
       <button onClick={handleStop}>STOP</button>
       <button onClick={handleReset}>RESET</button>
    </>
  )
}

export default App
