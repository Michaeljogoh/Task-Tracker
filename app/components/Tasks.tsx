import { ITask } from "@/types/tasks"

interface TaskProps {
    task:ITask
}

const Tasks:React.FC<TaskProps> = ({ task }) => {
  return (
    <tr key={task.id}>
    <td>{task.text}</td>
    <td>Date</td>
</tr>
  )
}

export default Tasks