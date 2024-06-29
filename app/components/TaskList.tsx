import { ITask } from "@/types/tasks"
import Tasks from "./Tasks"

interface TaskListProps {
    tasks:ITask[]
}



const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
<div className="overflow-auto">
  <table className="table w-full">
  <thead className="bg-slate-200 " >
  <tr>
  <th className="text-black">Tasks</th>
  <th className="text-black">Actions</th>
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