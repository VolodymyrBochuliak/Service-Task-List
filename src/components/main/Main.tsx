import { UserTasks } from "../regform/UserTasks.dao";
import React, {useState, useContext} from react;

const Main = () => {

    const UserTasksFromLocalStorage: UserTasks [] = JSON.parse(localStorage.getItem('userTask') as string ) || [];
   
    const [userTask, setUserTask] = useState<[]>(UserTasksFromLocalStorage);
    const [isModalOpened, setModalOpened] = useState<boolean>(false);

    const updateUserTaskList = (newTasks: UserTasks) => {
        setUserTask([...userTask, newTasks]);
        localStorage.setItem('userTask', JSON.stringify([...userTask, newTasks]));
    }

    const handleOpenModal = () => {
        setModalOpened(true);
    }

    const handleClearAllList = () => {
        localStorage.removeItem('userTask');
        setUserTask([]);
    }
    const handleRemoveOneListItem = () => {
        
    }

    const closeModal = () => setModalOpened(false);

    return (
        <div>

        </div>
    )
}

export default Main