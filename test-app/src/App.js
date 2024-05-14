import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { Box, Container } from "@mui/material";
import DSA from './DSA';

function App() {
  const [task, setTask] = useState('')
  const [list, setList] = useState([])
  const [count, setCount] = useState(0);

  const counter = useRef(0)
  
  useEffect(()=>{
    counter.current = counter.current+1
  })

  console.log({ counter }) // conting number of application re-renders with ref

  const increment = () => {
    setCount((c) => c + 1);
  };

  const handleSubmit = useCallback(() => {
    let arr = [...list, task]
    setTask('')
    setList(arr)
  }, [task]) // not clear if task or list should be a dependecy here

  console.log('App--->task', task)

  return (
    <div className="App">
      <Container maxWidth="sm">
        {/* <h2>Grocery Shopping List</h2>
        <Box sx={{ bgcolor: '#cfe8fc', height: '70vh', border: '5px solid #000', borderRadius: '10px' }} >
          <AddTodo task={task} setTask={setTask} handleSubmit={handleSubmit} />
          <TodoList list={list} />

          <div>
            Count: {count}
            <button onClick={increment}>+</button>
          </div>

        </Box> */}
        <DSA />
      </Container>
    </div>
  );
}

export default App;
