import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import './App.css';
import { FormControl, InputLabel, Input } from '@mui/material';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
const [todos, setTodos] = useState([]);
const [input, setInput] = useState("");

//when the app loads, we need to listen to the database and fetch new Todos as they get added/ removed
useEffect(() => {
  //this code here fires when the app.js loads
  db.collection("todos").orderBy('timestamp','desc').onSnapshot(snapshot =>{
    setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))   // Syntax is [ collection.docs.data().key ] in this case it becomes [ snapshot.docs.data().todo ] (docs may have multiple docs so we need to map through them)
  })
}, []);

const addTodo = (event) => {
  event.preventDefault();   //WILL STOP REFRESH

  db.collection('todos').add({
    todo: input,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })

  setTodos([...todos, input]);
  setInput("");   //clear up the input after submit
}

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <Button disabled={!input} type= 'submit' onClick={addTodo} variant="contained" color="primary">
          Add Todo
          </Button>
        
      </form>
      
      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
