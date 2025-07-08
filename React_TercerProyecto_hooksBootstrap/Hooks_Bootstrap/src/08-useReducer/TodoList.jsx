import { TodoItem } from "./TodoItem"

export const TodoList = ({state = [],handleDeleteTodo, handleToggleTodo}) => {
  return (
        <ul>
          {state.map((todo) => (
            <TodoItem key={todo.description} todo={todo}  handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} />
          ))}
        </ul>
  )
}
