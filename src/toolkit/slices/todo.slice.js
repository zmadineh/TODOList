import { createSlice } from "@reduxjs/toolkit";
import {todos} from "../../data/todos";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {todos},
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo =>  todo.id === action.payload.id ? action.payload : todo);
        },
        checkTodo: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? {...todo, check: !todo.check} : todo);
        },
        showTodoDec: (state, action) => {
            state.todos = state.todos.map(todo =>  todo.id === action.payload.id ? {...todo, active: true} : {...todo, active: false});
        },
    },
});

export const {
    addTodo,
    removeTodo,
    updateTodo,
    checkTodo,
    showTodoDec,
} = todoSlice.actions;

export default todoSlice.reducer;