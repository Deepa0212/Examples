import { useEffect, useState, useRef } from "react";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoList = () => {
    const [task, setTask] = useState('')
    const [desc, setDesc] = useState('')
    const [isEdit, setEdit] = useState(false)
    const inputRef = useRef();
    const [todoList, setTodoList] = useState([
        {
            title: "Study",
            desc: "Prepare for interview, sharpen skills",
            completed: false,
            id: Date.now()
        }
    ])

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const handleChangeDescription = (e) => {
        setDesc(e.target.value)
    }

    const addNewTask = (e) => {
        e.preventDefault()
        let completed = false
        let todo = {
            title: task,
            desc,
            id: Date.now(),
            completed
        }
        setTask('')
        setDesc('')
        let list = [...todoList, todo]
        setTodoList(list)
    }

    const toggleCompleted = (e, todo) => {
        let filteredList = todoList.map(td => {
            if (td.id === todo.id) {
                return { ...td, completed: !td.completed }
            }
            else {
                return td
            }
        })
        setTodoList(filteredList)
    }

    const editTitle = (e, todo) => {
        setEdit(true)
        let list = [...todoList]
        let editItem = list[todo.id]
        editItem = {
            ...editItem,title: todo.title
        }
        todoList.splice(todo.id, 1, editItem)
        setTodoList(todoList)
    }

    const handleDelete = (e, todo) => {
        let list = todoList.filter(td => td.id !== todo.id)
        setTodoList(list)
    }

//     const [isEditing, setIsEditing] = useState(false);
//   const [currentTodo, setCurrentTodo] = useState({ id: null, text: '' });

//   const handleEditInputChange = (e) => {
//     setCurrentTodo({ ...currentTodo, text: e.target.value });
//   };

//   const handleEditFormSubmit = (e) => {
//     e.preventDefault();
//     // Update the todo in your todos array
//     const updatedTodos = todos.map((todo) =>
//       todo.id === currentTodo.id ? currentTodo : todo
//     );
//     setTodos(updatedTodos);
//     setIsEditing(false);
//   };

//   const handleEditClick = (todo) => {
//     setIsEditing(true);
//     setCurrentTodo({
//       id: todo.id,
//       text: todo.text,
//     });
//   };

    return (
        <div className="container">
            <h4 className="title">Todo React App</h4>
            <form>
                <ul className="flex-outer">
                    <li>
                        <label>Enter Task</label>
                        <input type="text" ref={inputRef} name="todo" value={task} onChange={handleChange} />
                    </li>
                    <li>
                        <label>Enter Description for the task</label>
                        <textarea name="desc" value={desc} onChange={handleChangeDescription} />
                    </li>
                    <li className="btn"><button onClick={addNewTask}>Add Task</button></li>
                    <li className="btn"><button onClick={editTitle}>Update Task</button></li>
                </ul>
            </form>
            <div>
                <table className="tasks">
                    <thead><td className="title"> Tasks List</td></thead>
                    <tbody>
                        {todoList?.map((todo, index) => <tr>
                            <FontAwesomeIcon className="icon" onClick={(e) => editTitle(e, todo)} icon={faPen} />
                            <td onClick={(e) => toggleCompleted(e, todo)} className={todo.completed ? 'completedTask' : null} style={{ width: '200px', border: '1px solid #000' }}>{todo.title}</td>
                            {/* <td style={{ width: '200px', border: '1px solid #000' }}>{todo.desc}</td> */}
                            <FontAwesomeIcon className="icon" onClick={e => handleDelete(e, todo)} icon={faTrash} />
                        </tr>)}
                    </tbody>
                </table>
            </div>

            {/* <div key={todo.id}>
        {isEditing && currentTodo.id === todo.id ? (
          <form onSubmit={handleEditFormSubmit}>
            <input
              type="text"
              value={currentTodo.text}
              onChange={handleEditInputChange}
            />
            <button type="submit">Update</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </form>
        ) : (
          <div>
            <span>{todo.text}</span>
            <button onClick={() => handleEditClick(todo)}>Edit</button>
          </div>
        )}
      </div> */}
        </div>
    );
}

export default TodoList;