import { useGetTodoByIdQuery } from "./store/apis";

export const TodoApp = () => {
  // Puedes cambiar el ID por el que quieras consultar
  const todoId = 1;
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

  return (
    <>
      <h1>Todo RTK Query</h1>
      <hr />

      <h4>isLoading...  {isLoading ? 'True' : 'False' }</h4>
      <pre>{JSON.stringify(todo, null, 2)}</pre>

      <ul>
        {todo && (
          <li key={todo.id}>
            <strong>{todo.completed ? '✅' : '❌'}</strong> {todo.title}
          </li>
        )}
      </ul>

      <button>next todo</button>
    </>
  );
};
