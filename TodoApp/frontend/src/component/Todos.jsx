export function Todos({ todos = [], markAsCompleted }) {
  return (
    <div style={{ textAlign: "center" }}>
      {todos.length === 0 ? (
        <p>No todos found. Click "Get the list of the Todos".</p>
      ) : (
        todos.map((todo, index) => (
          <div
            key={index}
            style={{ border: "1px solid gray", padding: "10px", margin: "10px auto", width: "300px" }}
          >
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <button onClick={() => markAsCompleted(todo._id)}>
              {todo.completed ? "Completed" : "Mark as completed"}
            </button>
          </div>
        ))
      )}
    </div>
  );
}
