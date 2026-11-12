import { useState, useRef } from 'react'

interface Taskitem{
  id:number,
  txt:string,
  checked:boolean
}

function Todo(){
  const [task, setTask] = useState("");
  const [tasks, setTasks]=useState<Taskitem[]>([]);
  let init=useRef(1)

  function handlechange(e:React.ChangeEvent<HTMLInputElement>){
setTask(e.target.value);
  }

  function handleClick(e:React.MouseEvent<HTMLButtonElement>){
    e.preventDefault();
    if(task.trim() === "") return;

    const T: Taskitem={
      id:init.current++,
      txt:task,
      checked:false

    }

    setTasks([...tasks, T]);
    setTask("");
  }

  function handleChecboxchanges(id: number){
setTasks(tasks.map((t)=>t.id=== id? {...t , checked: !t.checked}: t))
  };

  function deletetask(id: number){
    setTasks(tasks.filter((t)=>t.id!==id))
  }
  return(
    <>
    <div className='flex flex-col  justify-center items-center gap-12 h-screen w-full'>
    <h1 className='flex justify-center items-center  text-gray-500 text-8xl'>todos</h1>
    <form className=''>
      <label>Enter  Task:
        <div className='relative w-full'>
    <input type="text" 
    value={task} 
    onChange={handlechange} 
    placeholder='Add todo...'
    className='rounded-full w-200 h-12 shadow-2xl shadow-gray-900 pl-6 border-none focus:outline-hidden' 
   
    />
    <button className='absolute right-2 top-1/2 transform -translate-y-1/2  pr-6' onClick={handleClick}>
  <img src="/circle-plus-solid-full.svg" className='w-8 h-8 ' />
  </button>


  </div>
    </label>
    </form>

    <div className='w-200'>
      {tasks.map((items)=>{
    return(<div key={items.id} style={{width:'100%'}} className='border-b border-gray-400'><div className='flex  justify-between items-center p-2'>
      <div className='flex items-center gap-2'>
      <input type='checkbox' checked={items.checked} onChange={()=>handleChecboxchanges(items.id)}/>
      <span  className={`${
    items.checked ? "line-through text-gray-500" : "text-gray-500"
  } wrap-break-word whitespace-normal`}>{items.txt}</span>
         </div>
         
         <button type='button' className='' onClick={()=>deletetask(items.id)}>
          
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
