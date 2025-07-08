export const TodoItem = ({ todo, handleDeleteTodo, handleToggleTodo }) => {
  return (
    <li key={todo.description}>
      <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span
          className={todo.done ? "text-decoration-line-through" : ""}
          style={{ cursor: "pointer", flex: 1 }}
          onClick={() => handleToggleTodo(todo.id)}
        >
          {todo.description}
        </span>
        <button 
          className="btn btn-danger mt-2"
          onClick={() => handleDeleteTodo(todo.id)}
        >
          eliminar
        </button>
      </span>
    </li>
  );
};
