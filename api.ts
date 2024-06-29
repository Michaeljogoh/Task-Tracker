import { ITask } from "./types/tasks";

const baseUrl = "http://localhost:3001"

 export const getAllTasks = async() : Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks`, {cache:"force-cache"});
    const tasks = res.json()
    return tasks

 };