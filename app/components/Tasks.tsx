"use client"


import { ITask } from "@/types/tasks";
import { FormEventHandler, useState } from "react";
import {FiEdit , FiTrash2} from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTask, editTask } from "@/api";

interface TaskProps {
    task:ITask
}

const Tasks:React.FC<TaskProps> = ({ task }) => {
  
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [taskEdit, setTaskEdit] = useState(task.text);

// update function
  const handleSubmitEditTask: FormEventHandler<HTMLFormElement> = async (e) =>{
    e.preventDefault();
    await editTask({
      id:task.id,
      text:taskEdit
    })

    setOpenModalEdit(false);
    window.location.reload()
   
  }

  // delete function
  const handleSubmitDelete = async (id: string) =>{
    await deleteTask(id);
    setOpenModalDelete(false);
    window.location.reload();
    
  }


  return (
    <tr key={task.id} role="tablelist">
    <td className="w-full">{task.text}</td>
    <td className="flex gap-5">
      {/* Edit Task */}
        <FiEdit size={25} onClick={() => setOpenModalEdit(true)} cursor="pointer" className="text-amber-500" />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
            <form onSubmit={handleSubmitEditTask}>
                <h3>Edit Task</h3>
                <div className="modal-action">
                    <input type="text" placeholder="Text" value={taskEdit} onChange={e => setTaskEdit(e.target.value)} className="input input-bordered w-full" />
                    <button type="submit" className="btn btn-success text-white">Submit</button>
                </div>
            </form>    
        </Modal>
        {/* Delete Task */}
        <FiTrash2 size={25} onClick={() => setOpenModalDelete(true)} cursor="pointer" className="text-red-500"/>
        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
            <form onSubmit={handleSubmitEditTask}>
                <h3 className="text-lg">Confirm to delete this task?</h3>
                <div className="modal-action">
                  <button className="btn btn-error text-white" onClick={() => handleSubmitDelete(task.id)}>Yes</button>
                </div>
            </form>    
        </Modal>
    </td>
</tr>
  )
}

export default Tasks