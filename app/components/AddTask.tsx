"use client"

import {AiOutlinePlus} from "react-icons/ai"
import Modal from "./Modal"
import { FormEventHandler, useState } from "react"
import { addTask } from "@/api"
import { useRouter } from "next/navigation";
import { v4 as uuidv4} from "uuid"

const AddTask = () => {
    const router = useRouter()
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const[taskValue, setTaskValue] = useState<string>("");
    


    const handleSubmitNewTask: FormEventHandler<HTMLFormElement> = async (e) =>{
        e.preventDefault();
         
        await addTask({
            id: uuidv4(),
            text:taskValue
        });

        setTaskValue("")
        setModalOpen(false)
        router.refresh()
    }

  return (
    <div>
        <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full" >
            Add New Task 
            <AiOutlinePlus className="ml-2" size={18}  />
        </button>
        
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
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