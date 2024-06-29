import { ITask } from "@/types/tasks"
import Tasks from "./Tasks"

interface TaskListProps {
    tasks:ITask[]
}



const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
<div className="overflow-auto">
  <table className="table w-full">

  <thead >
  <tr>
  <th>Tasks</th>
  <th>Date</th>
 </tr> 
 </thead>
 <tbody >
    {tasks.map((task) => <Tasks key={task.id} task={task}  />)}
</tbody>
  </table>

</div>

  )
}

export default TaskList