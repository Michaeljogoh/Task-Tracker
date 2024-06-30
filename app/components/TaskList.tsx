"use client"

import { ITask } from "@/types/tasks";
import Tasks from "./Tasks";
import { useState } from "react";



interface TaskListProps {
    tasks:ITask[]
}



const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
   const [search, setSearch] = useState<string>('');
  
  return (
  <div className="overflow-auto ">
    {/* search */}
  <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." className="input input-bordered rounded-none mt-[-0.1px]   w-full" />
  <table className="table table-zebra w-full">
  <thead className="bg-[#f2f2f2] " >
  <tr>
  <th className="text-black">Tasks</th>
  <th className="text-black">Actions</th>
 </tr> 
 </thead>
 <tbody >
  {tasks.filter((item) => item.text.toLocaleLowerCase().includes(search.toLowerCase())).map((task) => 
  <Tasks key={task.id} task={task}/>)}
</tbody>
  </table>

</div>

  )
}

export default TaskList