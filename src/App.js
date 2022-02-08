import { useState } from 'react';

function App() {
const [count, setCount] = useState(0);

  return (
    <div className='container'>
      <div className='container-title'><h1>COUNTER APP</h1></div>
      <div className='container-body'>
        <h1>{count}</h1>

        <button 
        className='increment'
        onClick={increment}
        >
          INCREASE
        </button>
        
        <button 
        className='decrement'
        onClick={decrement}
        disabled = {count === 0}
        >
          DECREASE
        </button>
        
        <button 
        className='reset'
        onClick={reset}
        disabled = {count === 0}
        >
          RESET
        </button>
      </div>

    </div>
    
  );

  function increment(){ 
    return (setCount(count +1));
  }
  
  function decrement() {
    return ( setCount(count - 1));
  }
  
  function reset(){
    return (setCount(0));
  }
}

export default App;