import { getAllTasks } from "@/api";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useState } from "react";

export default async function Home() {
 
 

  const tasks = await getAllTasks();
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Task Tracker</h1>
          <AddTask />
          <TaskList tasks={tasks} />
      </div>

    </main>
  );
}
