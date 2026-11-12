import { useState } from 'react'

function useCounter(initialValue=0, {min,max}){
const [count,setCount]=useState(initialValue);

const increment=()=>setCount(count=>count<max?count+1:count);
const decrement=()=>setCount(count=>count>min?count-1:count);

const reset=()=>setCount(initialValue);

return {count,increment,decrement, reset}
}

function Counter(){
  const {count, increment,decrement,reset}=useCounter(0,{max:20,min:1})
return(
  <>
  <p>{count}</p>
  <button onClick={increment}>+</button>
  <button onClick={decrement}>-</button>
  <button onClick={reset}>Reset</button>
  </>
)
}

export default Counter;