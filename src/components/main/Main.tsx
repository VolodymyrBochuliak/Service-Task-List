import { UserTask } from "../form/UserTasks.dao";
import UserTaskList from "./UserTasksList";
import React, {useState} from 'react';


const Main = () => {

    const UserTasksFromLocalStorage: UserTask [] = JSON.parse(localStorage.getItem('userTask') as string ) || [];
   
    const [userTask, setUserTask] = useState(UserTasksFromLocalStorage);
    const [isModalOpened, setModalOpened] = useState<boolean>(false);

    const updateUserTaskList = (newTasks: UserTask) => {
        setUserTask([...userTask, newTasks]);
        localStorage.setItem('userTask', JSON.stringify([...userTask, newTasks]));
    }

    const handleOpenModal = () => {
        setModalOpened(true);
    }
    const closeModal = () => setModalOpened(false);

    const handleClearAllList = () => {
        localStorage.removeItem('userTask');
        setUserTask([]);
    }
    const handleRemoveOneListItem = () => {
        
    }


    return (
        <div>
            <UserTaskList
                tasks={userTask}
            />


            {isModalOpened &&
                <TaskForm 
                    updateUserTaskList={updateUserTaskList}  
                    handleCloseModal={closeModal}
                />
            }

        </div>
    )
}

export default Main