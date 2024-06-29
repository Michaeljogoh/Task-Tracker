import { ITask } from "@/types/tasks"

interface TaskListProps {
    tasks:ITask[]
}



const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
<div className="overflow-x-auto">
  <table className="table">

  <thead >
  <tr>
  <th>Id</th>
  <th>Text</th>
 </tr> 
 </thead>
    {tasks.map((task, index) =>{
        return(
             <>   
            <tbody key={index}>
            <tr>
                <td>{task.id}</td>
                <td>{task.text}</td>
            </tr>
        
         </tbody>
    </>
        )
    })}
  </table>

</div>

  )
}

export default TaskList