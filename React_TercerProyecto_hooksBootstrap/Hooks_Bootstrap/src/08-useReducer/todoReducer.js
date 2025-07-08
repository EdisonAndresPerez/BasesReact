export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            // Agrega el nuevo todo al estado, sin modificar los otros
            return [
                ...initialState,
                {
                    id: new Date().getTime(),
                    description: action.payload.description,
                    done: false,
                }
            ];
        case 'ABC':
            throw new Error('Action.type = ABC no esta implementada');

        case '[TODO] Remove todo':
            // Elimina el todo con el id especificado
            return initialState.filter(todo => todo.id !== action.payload);
        case '[TODO] Toggle todo':
            // Cambia el estado de done del todo con el id especificado
            return initialState.map(todo =>
                (todo.id === action.payload)
                    ? { ...todo, done: !todo.done }
                    : todo
            );
        default:
            return initialState;
    }
}
