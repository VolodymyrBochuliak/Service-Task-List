import { UserTask } from "./UserTasks.dao";
import React, {useState} from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SelectInput from "../shared components/SelectInput";
import '../form/TaskForm.scss';
import { handleFieldChange } from "./formFunctions";
import NonLinearSlider from "../shared components/RangedInput";


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

    
    const createTask = (event: { preventDefault: () => void; }): void => {
        event.preventDefault();

        // let date = new Date();
        // let currentDate = date.getDate()
        // setCreateDate(currentDate);
        // console.log(createDate)
        // console.log(currentDate)

        props.updateUserTaskList({
            title: title,
            createDate: createDate,
            timeRange: timeRange,
            group: group,
            responsiblePerson: responsiblePerson,
            progress: progress
       })

       
    }

    const groupOfValues = [
        {
          value: 'Body works',
          label: 'Body works',
        },
        {
          value: 'Engine works',
          label: 'Engine works',
        },
        {
          value: 'Suspension works',
          label: 'Suspension works',
        },
        {
          value: 'Interior works',
          label: 'Interior works',
        },
    ];
    const employeesValue = [
        {
          value: 'Jon Dou',
          label: 'Jon Dou',
        },
        {
          value: 'Peter Parker',
          label: 'Peter Parker',
        },
        {
          value: 'Aaron Stack',
          label: 'Aaron Stack',
        },
        {
          value: 'Anne Marie Hoag',
          label: 'Anne Marie Hoag',
        },
        {
          value: 'Alex Wilder',
          label: 'Alex Wilder',
        },
    ];

    return (
        <div className="form">
            <div className="form_header">
               <h4> Add new task window </h4>
                <Button 
                    sx={{ m: 0, p: 0, width: '16ch' }}
                    variant="contained" 
                    color="success"
                    size="small"
                    onClick={createTask}
                >
                    Create new task
                </Button>
            </div>
        <Box 
            component="form"
            sx={{'& > :not(style)': {mt: 2, mb: 2,}}}
            noValidate
            autoComplete="off"
        >
            <TextField 
                sx={{'& > :not(style)': { width: '35ch' }}}
                id="outlined-basic" 
                label="Enter task title" 
                variant="outlined" 
                onChange={handleFieldChange(setTitle)}
            />
            {/* <TextField
                sx={{'& > :not(style)': {ml: 5, width: '15ch' }}}
                id="outlined-number"
                label="Time for execution"
                type="number"
                InputLabelProps={{ shrink: true, }}
                // onChange={handleFieldChange()}
            /> */}
            <TextField
                id="date"
                label="Ending date"
                type="date"
                sx={{ ml: 5, width: 150 }}
                InputLabelProps={{ shrink: true, }}
            />

            <NonLinearSlider/>

            <SelectInput
                arrayOfValues={groupOfValues}
                label="Group"
                helperText="Please select group of ..."
                onChange={handleFieldChange(setType)}
            />
            <SelectInput
                arrayOfValues={employeesValue}
                label="Responsible person"
                onChange={handleFieldChange(setResponsiblePerson)}
                
            />
        </Box>
           
        </div>
    )
}

export default TaskForm;