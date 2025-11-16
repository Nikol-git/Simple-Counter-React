import React, {useState} from 'react';

function Counter(){
const [count, setCount] = useState(0);

const increment = () =>{
    setCount(count + 1);
}



const decrement = () =>{
    setCount(count - 1);
}

const reset = () =>{
    setCount(0);
}


return(
   <div className="counter-container">
  <p className="count-display">{count}</p>
  <div className="counter-buttons">
    <button className="counter-button decrement" onClick={decrement}>Decrement</button>
    <button className="counter-button reset" onClick={reset}>Reset</button>
    <button className="counter-button increment" onClick={increment}>Increment</button>
  </div>
</div>

)
}


export default Counter