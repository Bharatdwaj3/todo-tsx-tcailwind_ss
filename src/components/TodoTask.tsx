import { ITask } from './interfaes'

interface Props  {
    task  : ITask;
    completeTask(taskNameToDelete:string):void;
}

const TodoTask = ({task,completeTask}: Props) => {
  return (
    <>
        <div className="mt-3 w-full h-[100px]  content-center rounded-xl">
            <div className="ml-96 bg-lime-400 w-[500px] h-[50px] relative rounded-xl">
                <div className="bg-yellow-400 w-[500px] h-[50px] absolute left-0 top-0 rounded-xl" >
                    <div className="flex flex-row">
                        <div className="bg-neutral-300 w-1/2 h-[50px] rounded-l-xl">
                            <h1 className="mt-2 text-black text-center font-serif text-xl">
                                {task.taskName}
                            </h1>
                        </div>
                    <div className="bg-neutral-600 w-1/2 h-[50px] rounded-r-xl">
                        <h1 className="mt-2 text-white text-center font-serif text-xl">
                                {task.deadline}
                        </h1>
                    </div>
                    </div>
                </div>
                <div className="bg-neutral-950 w-28 h-[50px] absolute -right-20 top-0 rounded-r-xl">
                    <button className="mt-3 ml-3 text-center text-xl font-serif content-center text-white"
                    onClick={()=>{
                        completeTask(task.taskName)
                    }}>
                        X
                    </button>
                </div>
            </div>
           
        </div>
    </>
  )
}

export default TodoTask