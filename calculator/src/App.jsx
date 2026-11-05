import { useState } from 'react';

function Calculator(){

const[value, setValue]=useState("0");
const[pNum,setPNum]=useState(0);
const[operator, setOperator]=useState("");
const[ischanged,setIschanged]=useState(false)

function handleClick(e){
  if(ischanged){
    setValue(e.target.innerText==="."? "0.": e.target.innerText);
    setIschanged(false);
  }else if(e.target.innerText==="." && value==="0"){
setValue("0.");
  } else if(e.target.innerText==="." && value.includes(".")){
return;
  }else if(value === "0"){
setValue(e.target.innerText);
  }else{
 setValue((value)=> value + e.target.innerText);
  };

};

function handlesign(){
   if(!value.startsWith("-")){
    if(value==="0") return;
setValue("-"+value);
 }else{
  setValue(value.slice(1));
 }
};

function handleOperator(e){
setPNum(Number(value));

setOperator(e.target.innerText);

setIschanged(true);

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
  case '%':
    result=pNum%a;
    break;
  default:return;
}

setValue(String(result));

setPNum(0);
setOperator("");
}

function reset(){
setValue("0");
setPNum(0);
setOperator("");
setIschanged(false);
}



return(
  <table className="block w-full max-w-xs mx-auto">
    <caption className='block'>Calculator</caption>
    <thead className='block'>
      <tr className="grid grid-cols-4">
        <th className="col-span-4 bg-gray-500  h-12 text-right text-3xl pr-3 text-white" >{value}</th>
      </tr>
    </thead>
    <tbody className='block'>
<tr className="grid grid-cols-4">
  <td className="text-center p-4 border font-semibold border-gray-400" onClick={reset}>AC</td>
  <td className="text-center p-4 border font-semibold border-gray-400" onClick={handlesign}>+/-</td>
  <td className="text-center p-4 border font-semibold border-gray-400" onClick={handleOperator}>%</td>
  <td className="text-center p-4 border  bg-amber-600  text-white  border-gray-400 font-semibold" onClick={handleOperator}>÷</td>
</tr>

<tr className="grid grid-cols-4">
  <td className="text-center p-4 border font-semibold border-gray-400" onClick={handleClick}>7</td>
  <td className="text-center p-4 border font-semibold border-gray-400" onClick={handleClick}> 8</td>
  <td className="text-center p-4 border font-semibold border-gray-400" onClick={handleClick}> 9</td>
  <td className="text-center p-4 border  bg-amber-600 text-white border-gray-400 font-semibold" onClick={handleOperator}>×</td>
</tr>

<tr className="grid grid-cols-4">
  <td className="text-center p-4 border font-semibold border-gray-400" onClick={handleClick}>4</td>
  <td className="text-center p-4 border font-semibold border-gray-400" onClick={handleClick}>5</td>
  <td className="text-center p-4 border font-semibold border-gray-400" onClick={handleClick}>6</td>
  <td className="text-center p-4 border bg-amber-600  text-white  border-gray-400 font-semibold" onClick={handleOperator}>-</td>
</tr>

<tr className="grid grid-cols-4">
  <td className="text-center p-4 border font-semibold border-gray-400" onClick={handleClick}>1</td>
  <td className="text-center p-4 border font-semibold border-gray-400" onClick={handleClick}> 2</td>
  <td className="text-center p-4 border font-semibold border-gray-400" onClick={handleClick}>3</td>
  <td className="text-center p-4 border  bg-amber-600  text-white  border-gray-400 font-semibold" onClick={handleOperator}>+</td>
</tr>

<tr className="grid grid-cols-4">
  <td className="col-span-2 text-center p-4 border font-semibold border-gray-400" onClick={handleClick}>0</td>
  <td className="text-center p-4 border font-semibold border-gray-400" onClick={handleClick}>.</td>
  <td className="text-center p-4 border  bg-amber-600  text-white  border-gray-400 font-semibold" onClick={handleEqual}>=</td>
</tr>

    </tbody>
  </table>
)

}

export default Calculator;
