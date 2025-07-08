

//Aqui estamos definiendo un estado inical para nuestro reducer
//En este caso es un arreglo de objetos que contiene informacion de una persona
//como su id, nombre, email, edad, direccion y telefono

//este estado podria crecer si agregamos mas elemntos a nuestro arreglo
const initialState = [{
    id: 1,
    name: 'Fernando',
    email: 'fernando@gmail.com',
    age: 30,
    address: '123 Main St',
    phone: '123-456-7890',
}]

//Esta es la funcion reducer que recibe el estado actual y una accion
//El estado inicial es el que definimos arriba, state = initialState
//Action es un objeto que describe que accion se quiere ejecutar
//En este caso, si la accion es de tipo '[TODO] Add Todo', se agrega
const todoReducer = (state = initialState, action = {} ) => {

    //Codicion para manejar una accion especifica
    //En este caso, si la accion es de tipo '[TODO] Add Todo', se
    //Devuelve un nuevo array de estado con el contenido actual (...state) más el nuevo dato (action.payload).
    //⚠️ Importante: no se modifica el array original, se crea uno nuevo (eso es inmutabilidad).
    if (action.type === '[TODO] Add Todo') {
        return [...state, action.payload];}


    // Si el tipo de acción no coincide con '[TODO] Add Todo', entonces el reducer simplemente devuelve el estado actual sin cambios.
    return state;
}

//ejecutamos el reducer sin accion
//por lo tanto, state se iguala al estado inicial
//action es un objeto vacío ({}), así que no cumple ninguna condición.
let todos = todoReducer()


//Creamos un nuevo objeto que queremos agregar al estado
//Este objeto representa una nueva persona con su id, nombre, email, edad, direccion y celular
const newTodo = {
    id: 2,
    name: 'Juan',
    email: 'juan@gmail.com',
    age: 25,
    address: '456 Elm St',
    phone: '987-654-3210',
}

//Creamos una accion que describe que queremos agregar un nuevo todo
//Esta accion tiene un tipo '[TODO] Add Todo' y un payload que es el nuevo
//type: identifica la acción que el reducer debe reconocer.
//payload: los datos que se van a usar en esa acción (en este caso, newTodo).
const  addTodoAction = {
    type: '[TODO] Add Todo',
    payload: newTodo,   
}

//aqui estamos ejecutando el reducer con el estado actual (todos) y la accion (addTodoAction)
//todos se actualiza con el nuevo estado que devuelve el reducer
todos = todoReducer(todos, addTodoAction);

console.log(todos);
