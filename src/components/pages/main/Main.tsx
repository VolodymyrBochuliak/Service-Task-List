import React, {useState} from 'react';
import { UserTask } from "../../form/UserTasks.dao";
import TaskList from "./TasksList";
import TaskForm from "../../form/TaskForm";
import "../main/Main.scss"
import BookmarkButton from '../../shared components/BookmarkButton';
import { red } from '@mui/material/colors';

interface IProps {
    closeModal: () => void;
    modalOpened: boolean
}

const Main = (props: IProps) => {
    const {
        closeModal,
        modalOpened
    }= props

    const UserTasksFromLocalStorage: UserTask [] = JSON.parse(localStorage.getItem('userTask') as string ) || [];
   
    const [userTask, setUserTask] = useState(UserTasksFromLocalStorage);

    const updateUserTaskList = (newTasks: UserTask) => {
        setUserTask([...userTask, newTasks]);
        localStorage.setItem('userTask', JSON.stringify([...userTask, newTasks]));
    }

    const handleClearAllTasks = () => {
        localStorage.removeItem('userTask');
        setUserTask([]);
    }
    const handleRemoveOneListItem = () => {
        
    }

    return (
        <div className="page_container" >
            <TaskList
                tasks={userTask}
            />
            <div className='start_page'>
                <BookmarkButton
                    className="bookmark"
                    name="All tasks"
                    style={{backgroundColor: 'rgb(225, 199, 165)',}}
                    directFunction={()=>{console.log("You click on")}}
                    />
                <BookmarkButton
                    className="bookmark"
                    name="Jon Dou"
                    style={{backgroundColor: 'rgb(225, 129, 165)', left: '38px',}}
                    directFunction={()=>{console.log("You choose Dou")}}
                    />
                <BookmarkButton
                    className="bookmark"
                    name="Peter Parker"
                    style={{backgroundColor: 'rgb(225, 159, 165)', left: '70px',}}
                    directFunction={()=>{console.log("You choose Parker")}}
                />
            </div>
            {modalOpened &&
                <TaskForm 
                    updateUserTaskList={updateUserTaskList}  
                    handleCloseModal={closeModal}
                />
            }

        </div>
    )
}

export default Main