import { useEffect, useState, useContext, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import araiCodeContext from './main';

function App() {
  const [count,setCount] = useState(0);
  const araicodeInfo = useContext(araiCodeContext);
  const ref = useRef();

  const handleClick = () => {
    setCount(count + 1); 
  };

  const handleRef = () =>{
    console.log(ref.current.value);
  }

useEffect(()=> {
  console.log("hello Hooks")
},[count]);

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>+</button>
        <p>
          {count}
        </p>
        <hr />
        <h1>useContext</h1>
        <p>{araicodeInfo.name}</p>
        <p>{araicodeInfo.age}</p>

        <hr />
        <h1>useRef</h1>
        <input type="text" ref={ref} />
        <button onClick={handleRef}>useRef</button>

        <hr />
        <h1>useReducer</h1>
        
    </div>
  );
}

export default App
