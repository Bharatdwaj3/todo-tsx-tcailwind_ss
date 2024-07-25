import {useState,ChangeEvent} from 'react'
import {ITask} from './interfaes'
import TodoTask from './TodoTask'

function Soda() {

  const [task,setTask] =useState<string>("");
 const [deadline,setDeadline] =useState<number>(0);
  const [todoList,setTodoList] =useState<ITask[]>([]);


  const handleChange=(event:ChangeEvent<HTMLInputElement>):void=>{
    if(event.target.name==="task"){
        setTask(event.target.value)
    }else{
        setDeadline(Number(event.target.value));
    }
  }
    const addTask= ():void =>{
      const newTask = {taskName:task, deadline:deadline};
      setTodoList([...todoList, newTask]);
      setTask("");
      setDeadline(0);
    }

  const completeTask = (taskNameToDelete:string):void => { 
    setTodoList(todoList.filter((task)=>{
      return task.taskName != taskNameToDelete
    }))
  };
 

  return (
    <>
        <div className="bg-slate-800 h-96 w-full relative">
          <div className=" h-full w-[770px] flex flex-col justify-center">
            <input className="ml-96 w-96 h-20 border-4 rounded-l-xl "
            type="text" 
            name="task"
            placeholder="Add ..."
            value={task}
            onChange={handleChange}/>
            <input className="ml-96 w-96 h-20 border-4 rounded-l-xl "
            type="number" 
            name="deadline"
            placeholder="Due .."
            value={deadline}
            onChange={handleChange}/>
          </div>
          <div className=" h-full w-[590px] absolute top-0 right-0">
            <button className="mt-28 bg-slate-300 w-36 h-[160px] border-4 rounded-r-xl "
            onClick={addTask}
            >Add Me</button>
          </div>
        </div>
        <div className="bg-sky-950 h-[500px] w-full items-center flex pt-[50px] flex-col">
          {todoList.map((task:ITask,key:number)=>{
              return<TodoTask key={key} task={task} completeTask={completeTask}/>;
            })
          }
        </div>
    </>
  )
}

export default Soda