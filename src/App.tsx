import { useState } from 'react'

function Todo(){
  const [task, setTask] = useState("");
  const [tasks, setTasks]=useState<string[]>([]);
  const [isChecked, setisChecked]=useState(false);

  function handlechange(e:React.ChangeEvent<HTMLInputElement>){
setTask(e.target.value);
  }

  function handleClick(e:React.MouseEvent<HTMLButtonElement>){
    e.preventDefault();
    if(task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  }

  function handleChecboxchnages(e){
setisChecked(e.target.checked)
  };
  return(
    <>
    <div className='flex flex-col  justify-center items-center h-screen w-full'>
    <h1 className='flex justify-center items-center  text-gray-500 text-8xl'>todos</h1>
    <form className=''>
      <label>Enter  Task:
        <div className='relative w-full'>
    <input type="text" 
    value={task} 
    onChange={handlechange} 
    placeholder='Add todo...'
    className='rounded-full w-2xl h-12 shadow-2xl shadow-gray-900 pl-6 border-none focus:outline-hidden' 
   
    />
    <button className='absolute right-2 top-1/2 transform -translate-y-1/2  pr-6' onClick={handleClick}>
  <img src="/circle-plus-solid-full.svg" className='w-8 h-8 ' />
  </button>


  </div>
    </label>
    </form>

    <div>
      {tasks.map((item,index)=>{
    return(<div><div key={index} className='flex gap-48'>
      <input type='checkbox' checked={isChecked} onChange={handleChecboxchnages}/>
      <span className={isChecked? "line-through":"text-black"}>{item}</span>
         <button className='' >
  <img src="/trash-solid-full.svg" className='w-8 h-8 ' />
  </button>
    </div>
    </div>
    )
  })
  }
    
    </div>
    </div>
    </>
  )

}

export default Todo
