import { Box, Container, TextField, Button, Stack } from "@mui/material";
import { memo, useState } from "react";

const AddTodo = ({ task, setTask, handleChange, handleSubmit }) => {
    console.log('AddTodo--->task', task)

    return (
        <Container maxWidth="sm">
            <h4>Add</h4>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '40ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField label="Add something to the list" onChange={(e)=> setTask(e.target.value)} variant="outlined" value={task} />
                    <Button disableRipple onClick={handleSubmit} variant="contained" size="medium">Add Task</Button>
                    <Button variant="contained" size="medium">Delete List</Button>
                </Box>
        </Container >
    );
}

export default memo(AddTodo);