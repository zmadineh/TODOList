import React from "react";
import { FaCheckCircle, FaRegCircle, FaRegTrashAlt, FaEdit} from "react-icons/fa";
import { BsBookmarkCheck, BsBookmark } from "react-icons/bs"
import '../App.css';
import {useDispatch, useSelector} from "react-redux";
import {removeTodo, checkTodo, showTodoDec} from "../toolkit/slices/todo.slice";
import clsx from "clsx";
import {FILTER_MAP} from "../data/filterOptions";
import NothingToShow from "./NothingToShow";

const TodoList = ({setForm, setFormStatus, tags, setFormEnable, tagSelected, filterSelected, search}) => {

    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    const handleDelete = todo => {
        dispatch(removeTodo(todo));
    }

    const handleCheck = todo => {
        dispatch(checkTodo(todo));
    }

    const handleUpdate = todo => {
        setFormEnable(true)
        setFormStatus('update')
        setForm(todo)
    }

    const showDec = todo => {
        dispatch(showTodoDec(todo));
    }

    const handleTagColor = todo => {
        const tagColor = tags.filter(t => t.label === todo.tag);
        const style = {
            borderColor: tagColor ? tagColor[0].value : '#000',
            backgroundColor: tagColor ? tagColor[0].value : '#000',
        }
        return style;
    }

    const todoFilter = () => {
        let todoList = todos.filter(FILTER_MAP[filterSelected]);
        if (filterSelected === 'ByTag')
            todoList = todoList.filter(todo => todo.tag === tagSelected)
        if (search)
            todoList = todoList.filter(todo => (todo.title.toLowerCase().includes(search)))
        return { todoList, length: todoList.length };
    }

    return (
        <div className='todoContainer'>
        {todoFilter().todoList.map(todo => (
                <div key={todo.id} className="todoItem" style={todo.completed ? {borderColor: '#D8D8D8'} :  handleTagColor(todo)}>
                    <div className='checkItem'>
                        <div onClick={() => handleCheck(todo)}>
                            {todo.completed ? <FaCheckCircle className='doneCircle'/> : <FaRegCircle className='notDoneCircle'/>}
                        </div>
                    </div>
                    <div className='todoText'  onClick={() => showDec(todo)}>
                        <h4 className={clsx('todoTitle', todo.completed && 'todo_checked')}>
                            {todo.title}
                        </h4>
                        <p className={clsx('todoTag', todo.active && 'd-flex', !todo.active && 'd-none')}>
                            {todo.completed ? <BsBookmarkCheck /> : <BsBookmark />}
                            {todo.tag}
                        </p>
                        <p className={clsx('todoDec', todo.active && 'd-flex', !todo.active && 'd-none')}>
                            {todo.dec}
                        </p>
                    </div>
                    <div className='todoButton'>
                        <button onClick={() => handleDelete(todo)}>
                            <FaRegTrashAlt className='todoIcon'/>
                        </button>
                        <button onClick={() => handleUpdate(todo)}>
                            <FaEdit className='todoIcon'/>
                        </button>
                    </div>
                </div>
        ))}
        <div>
            { todoFilter().length === 0 ? <NothingToShow /> : null }
        </div>

        </div>
    )
}
export default TodoList;