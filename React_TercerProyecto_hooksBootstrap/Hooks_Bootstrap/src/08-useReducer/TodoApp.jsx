import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { UseTodo } from "../hooks/UseTodo";

export const TodoApp = () => {
  const { state, handleAddTodo, handleDeleteTodo, handleToggleTodo } = UseTodo();

  return (
    <main style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
      {/* Parte izquierda: Lista de tareas */}
      <section style={{ flex: 1 }}>
        <h1>Todo List</h1>
        <hr />
        <TodoList
          state={state}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleTodo={handleToggleTodo}
        />
      </section>

      {/* Parte derecha: Formulario para agregar tarea */}
      <section style={{ flex: 1 }}>
        <h2>Agregar tarea</h2>
        <TodoAdd onAddTodo={handleAddTodo} />
      </section>
    </main>
  );
};
