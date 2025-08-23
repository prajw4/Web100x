import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './component/CreateTodo'
import { Todos } from './component/Todos'


function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    fetch("http://localhost:3000/Get")
      .then(res => res.json())
      .then(data => {
        setTodos(data.TodoUser);
      })
      .catch(err => {
        console.error("Error fetching todos", err);
      });
  };

  const markAsCompleted = (id) => {
    fetch(`http://localhost:3000/TodoUsers/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        alert(data.msg);
        getTodos(); // refresh after update
      })
      .catch(err => {
        console.error("Error updating todo", err);
      });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>To-Do App</h1>
      <CreateTodo setTodos={setTodos} getTodos={getTodos} />
      <Todos todos={todos} markAsCompleted={markAsCompleted} />
    </div>
  );
}

export default App;