"use client"

import {AiOutlinePlus} from "react-icons/ai"
import Modal from "./Modal"
import { FormEventHandler, useState } from "react"
import { addTask } from "@/api"
import { useRouter } from "next/navigation";
import { v4 as uuidv4} from "uuid"
// const router = useRouter();

const AddTask = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const[taskValue, setTaskValue] = useState<string>("");
    
    // Add new task 
    const handleSubmitNewTask: FormEventHandler<HTMLFormElement> = async (e) =>{
        e.preventDefault();
         
        await addTask({
            id: uuidv4(),
            text:taskValue
        });

        setTaskValue("")
        setModalOpen(false)
        // router.refresh();
        window.location.reload()
        
    }

  return (
    <div role="dialog">
        <div>Task</div>
        <button onClick={() => setModalOpen(true)} className="btn btn-success w-full mb-[-400px] text-white" >
            Add New Task 
            <AiOutlinePlus className="ml-2" size={18}  />
        </button>
        
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} data-testid="submit-new-task">
            <form onSubmit={handleSubmitNewTask}>
                <h3>Add New Task</h3>
                <div className="modal-action">
                    <input type="text" placeholder="Text" value={taskValue} onChange={e => setTaskValue(e.target.value)} className="input input-bordered w-full" />
                    <button type="submit" className="btn btn-success text-white">Submit</button>
                </div>
            </form>    
        </Modal>
    </div>
  )
}

export default AddTask