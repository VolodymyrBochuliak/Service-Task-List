import { UserTask } from "./UserTasks.dao";
import React, {useState} from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SelectInput from "../shared components/SelectInput";
import '../form/TaskForm.scss';


interface IProps {
    updateUserTaskList: (newTasks: UserTask) => void;
    handleCloseModal: () => void;
}

const TaskForm = (props: IProps) => {

    const {
        updateUserTaskList,
        handleCloseModal
    } = props;

    const [title, setTitle] = useState('');
    const [createDate, setCreateDate] = useState(0);
    const [timeRange, setTimeRange] = useState([1, 3]);
    const [group, setType] = useState('');
    const [responsiblePerson, setResponsiblePerson] = useState('');
    const [progress, setProgress] = useState(0);

    let date = new Date();
    let currentDate = date.getDate()

    const taskAddingDate = () :void => {
       setCreateDate(currentDate);
    //    console.log(createDate)
        // console.log( `${date.getFullYear()} - ${date.getUTCMonth()} - ${date.getDate() + 15}`)
    
    }

    const createTask = (event: { preventDefault: () => void; }): void => {
        event.preventDefault();


        props.updateUserTaskList({
            title: title,
            createDate: createDate,
            timeRange: timeRange,
            group: group,
            responsiblePerson: responsiblePerson,
            progress: progress
       })
    }

    return (
        <div className="form">
            <div className="form_header">
               <h4> Add new task window </h4>
                <Button 
                    sx={{ m: 0, p: 0, width: '16ch' }}
                    variant="contained" 
                    color="success"
                    size="small"
                    onClick={taskAddingDate}
                >
                    Create new task
                </Button>
            </div>
        <Box 
            component="form"
            sx={{'& > :not(style)': {mt: 2, mb: 2,}}}
            noValidate
            autoComplete="off"
            onSubmit={createTask}
        >
            <TextField 
                sx={{'& > :not(style)': { width: '35ch' }}}
                id="outlined-basic" 
                label="Enter task title" 
                variant="outlined" 
            />
            <TextField
                sx={{'& > :not(style)': {ml: 5, width: '15ch' }}}
                id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{ shrink: true, }}
                defaultValue='0'
            />
            <TextField
                id="date"
                label="Ending date"
                type="date"
                // defaultValue=""
                // defaultValue={{date.getFullYear} '-' {date.getMonth} '-' `${date.getDay} + 15`} //////////////////////////////////////
                sx={{ ml: 5, width: 150 }}
                InputLabelProps={{ shrink: true, }}
            />

            <SelectInput
            
            />
        </Box>
           
        </div>
    )
}

export default TaskForm;