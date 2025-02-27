import { createSlice } from "@reduxjs/toolkit";

const loadTodos = () => {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : []; 
};

const initialState = {
    todos: loadTodos(),
    editingTodo: null,
};

const saveTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
};

const addSlice = createSlice({
    name: "add",
    initialState,
    reducers: {
        addInformation: (state, action) => {
            state.todos.push(action.payload);
            saveTodos(state.todos); 
        },
        deleteInformation: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            saveTodos(state.todos);
        },
        editInformation: (state, action) => {
            state.todos = state.todos.map(todo =>
                todo.id === action.payload.id ? action.payload : todo
            );
            saveTodos(state.todos);
        },
        setEditingTodo: (state, action) => {
            state.editingTodo = action.payload;
        },
    },
});

export const { addInformation, deleteInformation, editInformation, setEditingTodo } = addSlice.actions;
export default addSlice.reducer;
