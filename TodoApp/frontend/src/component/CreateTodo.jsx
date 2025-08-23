import { get } from "mongoose";
import { useState } from "react";

export function CreateTodo({ setTodos, getTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = () => {
    fetch("http://localhost:3000/TodoUsers", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const json = await res.json();
        alert("To-do Added ✅");
        getTodos(); // refresh list after adding
      })
      .catch((err) => {
        console.error("Error adding To-do", err);
      });
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button style={{ padding: 10, margin: 10 }} onClick={addTodo}>
        Add a Todo
      </button>
      <button style={{ padding: 10, margin: 10 }} onClick={getTodos}>
        Get the list of the Todos
      </button>
    </div>
  );
}
