import { useCallback, useState } from 'react'

function useCounter(initialValue=0, {min=-Infinity,max=Infinity}={}){
const [count,setCount]=useState(initialValue);

const increment=useCallback(()=>setCount(count=>count<max?count+1:count),[max]);
const decrement=useCallback(()=>setCount(count=>count>min?count-1:count),[min]);
const reset=useCallback(()=>setCount(initialValue),[initialValue]);

return {count,increment,decrement, reset}
}

function Counter(){
  const {count, increment,decrement,reset}=useCounter(0,{max:20,min:0})
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