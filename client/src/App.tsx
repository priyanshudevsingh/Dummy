import { useState } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState(1);

  const func = () => {
    setNum(num * 2);
  }
  return (
    <div>
      <p>{num}</p>
      <button onClick={func}>Update it</button>
    </div>
  )
}

export default App
