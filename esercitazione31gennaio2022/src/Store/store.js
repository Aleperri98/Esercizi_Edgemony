import { createStore } from 'redux';

const initialState = {
    todos : [
        {
            text: 'Sono la prima nota',
            id:1,
            done: false,
            priority: false,
        },
        {
            text: 'Sono la seconda nota',
            id:2,
            done: true,
            priority: true,
        }
    ],
    fontSize: "",
};

const todosReducer = ( state, action ) => {
    switch(action.type) {
        case "add":
            return {
                todos: [...state.todos, action.payload]
                };
        case "remove":
            return {
                todos: state.todos.filter(item =>item.id !== action.payload)
                };
        case "done":
            const newTodoState = [...state.todos]
            const foundIndex = newTodoState.findIndex(note =>note.id === action.payload);
                newTodoState[foundIndex] = {
                ...newTodoState[foundIndex],
                done: !newTodoState
                };
                return{
                    todos: newTodoState
                };
        case "priority":
            return {
                ...state, fontSize: 50
            }
        default:
            return state;


            

    }
}

export const store = createStore(todosReducer, initialState);