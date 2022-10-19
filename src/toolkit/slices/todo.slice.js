import { createSlice } from "@reduxjs/toolkit";
import {todos} from "../../data/todos";

export const todoSlice = createSlice({
    name: "todo",
    initialState: { todos },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            //console.log(action.payload.id);
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        updateTodo: (state, action) => {
            const payload = action.payload;
            const index = state.todos.findIndex(todo => todo.id === payload.id);
            if (index !== -1)
                Object.assign(state.todos[index], payload);
        },
        checkTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id)
            if (todo)
                todo.completed = !todo.completed;
        },
        showTodoDec: (state, action) => {
            state.todos.forEach(todo => {
                if(todo.id === action.payload.id) todo.active = true;
                else todo.active = false;
            });
        },
        collapseTodo: (state) => {
            state.todos.forEach(todo => {
                todo.active = false;
            });
        }
    },
});

export const {
    addTodo,
    removeTodo,
    updateTodo,
    checkTodo,
    showTodoDec,
    collapseTodo,
} = todoSlice.actions;

export default todoSlice.reducer;