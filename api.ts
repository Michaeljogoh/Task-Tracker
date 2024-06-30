import { ITask } from "./types/tasks";
// import fetch from "node-fetch";

const baseUrl = "http://localhost:3001";

// Get all tasks

 export const getAllTasks = async() : Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks`, {cache:"no-cache"});
    const tasks = res.json()
    return tasks
 };

//  Add new task

 export const addTask = async (task : ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/tasks`,
        {method:'POST',
         headers:{'Content-Type':'application/json'},
         body:JSON.stringify(task)
        })
    const newTask = await res.json();
    return newTask;
 }

//  Update tasks

export const editTask = async (task : ITask): Promise<ITask> => {
   const res =  await fetch(`${baseUrl}/tasks/${task.id}`,
       {method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(task)
       })
   const updateTask = await res.json();
   return updateTask;
}


// Delete 

export const deleteTask = async (id: string): Promise<void> => {
   const res = await fetch(`${baseUrl}/tasks/${id}`,
       {method:'DELETE'
       })
   const deleteTask = await res.json();
   return deleteTask;
}

