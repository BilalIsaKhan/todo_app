import { Button, List, ListItem, ListItemText, Modal } from '@mui/material';
import React, { useState } from 'react';
import "./Todo.css"
import db from "./firebase";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//     paper: {
//         position: "absolute",
//         width: 400,
//         backgroundColor: theme.pallette.background.paper,
//         border: "2px solid #000",
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2,4,3),
//     },
// }));

function Todo(props) {
    // const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");

    const handleOpen = () => {
        setOpen(true);
    };

    const updateTodo = () => {
        //update the todo with the new input text

        db.collection("todos").doc(props.todo.id).set({
            todo: input,
            // timestamp: 
        }, {merge: true})
        setOpen(false);
    }
  return (
    <>
    <Modal
        open={open}
        onClose={e => setOpen(false)}
        >
            <div>
                <h1>I am a Modal</h1>
                <input placeholder={props.todo.todo} value={input} onChange = {event => setInput(event.target.value)}/>
                <Button onClick={updateTodo}>Update Todo</Button>
            </div>
        </Modal>
    <List>
        <ListItem>
            <ListItemText primary={props.todo.todo} secondary="Dummy deadline"/>
        </ListItem>
        <Button onClick={e => setOpen(true)}>Update Todo</Button>
        <DeleteForeverIcon onClick={
            event => {db.collection('todos').doc(props.todo.id).delete()}}/>
    </List>
    </>
  )
}

export default Todo
