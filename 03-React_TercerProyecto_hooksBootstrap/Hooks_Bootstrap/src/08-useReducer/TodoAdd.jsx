import { useForm } from "../hooks/useForm";


export const TodoAdd = ({ onAddTodo }) => {

    const { formState, handleChange, resetForm } = useForm({
        description: ''})

        const handleSubmit = (e) => {
          e.preventDefault();
          if (formState.description.trim().length === 0) return;
          onAddTodo(formState.description);
          resetForm();
        };



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="¿Qué hay que hacer?"
        name="description"
        value={formState.description}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-success mt-2 w-100">
        Agregar
      </button>
    </form>
  );
};
