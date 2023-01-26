import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { UserTask } from '../../form/UserTasks.dao';
import BookmarkButton from '../../shared components/BookmarkButton';



interface IProps {
  tasks: UserTask[]
}

const UserTaskList = (props: IProps) => {
    const tasks = props.tasks;


    if (tasks.length) {
        return (
          <div>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Time for execution&nbsp;(hours)</TableCell>
                  <TableCell align="right">Group</TableCell>
                  <TableCell align="right">Responsible Person</TableCell>
                  <TableCell align="right">Progress</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tasks.map((task) => (
                  <TableRow
                    key={task.title}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {task.title}
                    </TableCell>
                    <TableCell align="right">{task.createDate}</TableCell>
                    <TableCell align="right">{task.timeRange}</TableCell>
                    <TableCell align="right">{task.group}</TableCell>
                    <TableCell align="right">{task.responsiblePerson}</TableCell>
                    <TableCell align="right">{task.progress}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </div>
        )                     
    } else {
        return (
          <div> 
            <h3>No available tasks</h3>
            {/* <BookmarkButton
                className="bookmark"
                name="All tasks"
                directFunction={()=>{console.log("You click on")}}
            /> */}
          </div>
        )
    }
}

export default UserTaskList;