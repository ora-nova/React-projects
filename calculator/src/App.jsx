import { useState } from 'react';

function Calculator(){

const[value, setValue]=useState("");
const[pNum,setPNum]=useState(0);
const[operator, setOperator]=useState("");

function handleClick(e){
 setValue((value)=> Number(value + e.target.innerText));

 

};


function handleOperator(e){
setPNum(value);

setOperator(e.target.innerText);

setValue("");

}

function handleEqual(){
  let a=Number(value);

  let result;
  
switch(operator){
  case '+':
  result=pNum+a;  
  
  break;
  case '-':
    result=pNum-a;  
  
  break;
  case '÷':
    result=pNum/a;
  break;
  case '×':
    result=pNum*a;  
  break;
  default:
    return;
}

setValue(String(result));

setPNum(0);
setOperator("");
}

function reset(){
setValue(0)
}



return(
  <table className="block w-full max-w-xs mx-auto">
    <caption className='block'>Calculator</caption>
    <thead className='block'>
      <tr className="grid grid-cols-4">
        <th className="col-span-4 bg-gray-400  h-12 text-right text-3xl pr-3" >{value}</th>
      </tr>
    </thead>
    <tbody className='block'>
<tr className="grid grid-cols-4">
  <td className="text-center p-4 border" onClick={reset}>AC</td>
  <td className="text-center p-4 border">+/-</td>
  <td className="text-center p-4 border ">%</td>
  <td className="text-center p-4 border  bg-amber-600  text-white  border-black" onClick={handleOperator}>÷</td>
</tr>

<tr className="grid grid-cols-4">
  <td className="text-center p-4 border" onClick={handleClick}>7</td>
  <td className="text-center p-4 border" onClick={handleClick}> 8</td>
  <td className="text-center p-4 border" onClick={handleClick}> 9</td>
  <td className="text-center p-4 border  bg-amber-600 text-white border-black" onClick={handleOperator}>×</td>
</tr>

<tr className="grid grid-cols-4">
  <td className="text-center p-4 border" onClick={handleClick}>4</td>
  <td className="text-center p-4 border" onClick={handleClick}>5</td>
  <td className="text-center p-4 border" onClick={handleClick}>6</td>
  <td className="text-center p-4 border bg-amber-600  text-white  border-black" onClick={handleOperator}>-</td>
</tr>

<tr className="grid grid-cols-4">
  <td className="text-center p-4 border" onClick={handleClick}>1</td>
  <td className="text-center p-4 border" onClick={handleClick}> 2</td>
  <td className="text-center p-4 border" onClick={handleClick}>3</td>
  <td className="text-center p-4 border  bg-amber-600  text-white  border-black" onClick={handleOperator}>+</td>
</tr>

<tr className="grid grid-cols-4">
  <td className="col-span-2 text-center p-4 border" onClick={handleClick}>0</td>
  <td className="text-center p-4 border" onClick={handleClick}>.</td>
  <td className="text-center p-4 border  bg-amber-600  text-white  border-black" onClick={handleEqual}>=</td>
</tr>

    </tbody>
  </table>
)

}

export default Calculator;
