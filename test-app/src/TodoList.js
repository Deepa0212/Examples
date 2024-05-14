import * as React from 'react';
import { useState, memo } from 'react';
import { Box, Button, Container } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

const TodoList = ({ list }) => {
    console.log('Todolist--->list', list)
    const [checked, setChecked] = useState([0]);

    // const handleToggle = (value) => () => {
    //     const currentIndex = checked.indexOf(value);
    //     const newChecked = [...checked];

    //     if (currentIndex === -1) {
    //         newChecked.push(value);
    //     } else {
    //         newChecked.splice(currentIndex, 1);
    //     }

    //     setChecked(newChecked);
    // };

    const toggleTaskComplete = (e, value) =>{
        debugger
        console.log('toggleTaskComplete')


    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {list.map((value) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                    <ListItem
                        key={value}
                        disablePadding
                    >
                        <ListItemButton role={undefined} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                    onClick={(e)=>toggleTaskComplete(e, value)}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={value} />
                            <Button variant="outlined" size="small">Edit</Button>
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>

    );
}

export default memo(TodoList);