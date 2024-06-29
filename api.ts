import { ITask } from "./types/tasks";

const baseUrl = "http://localhost:3001"

 export const getAllTasks = async() : Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks`, {cache:"no-cache"});
    const tasks = res.json()
    return tasks
 };

 export const addTask = async (task : ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/tasks`,
        {method:'POST',
         headers:{'Content-Type':'application/json'},
         body:JSON.stringify(task)
        })
    const newTask = await res.json();
    return newTask;
 }