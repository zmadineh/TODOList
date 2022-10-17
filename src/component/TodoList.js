import React from "react";
import { FaCheckCircle, FaRegCircle, FaRegTrashAlt, FaEdit } from "react-icons/fa";
import '../App.css';
import {useDispatch, useSelector} from "react-redux";
import {removeTodo, checkTodo, showTodoDec} from "../toolkit/slices/todo.slice";
import clsx from "clsx";

const TodoList = ({setForm, setFormStatus, tags, setFormEnable}) => {

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
        const tagColor = tags.filter(t => t.tag === todo.tag)[0].color;
        const style = {
            borderColor: tagColor,
            backgroundColor: tagColor,
        }
        return style;
    }

    return (
        <div className='todoContainer'>
        {todos.length > 0 ? todos.map(todo => (
                <div key={todo.id} className="todoItem" style={todo.check ? {borderColor: '#D8D8D8'} :  handleTagColor(todo)}>
                    <div className='checkItem'>
                        <div onClick={() => handleCheck(todo)}>
                            {todo.check ? <FaCheckCircle className='doneCircle'/> : <FaRegCircle className='notDoneCircle'/>}
                        </div>
                    </div>
                    <div className='todoText'  onClick={() => showDec(todo)}>
                        <h4 className={clsx('todoTitle', todo.check && 'todo_checked')}>
                            {todo.title}
                        </h4>
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
            )) :
        <div>
            !!!!!
        </div>
            }
        </div>
    )
}
export default TodoList;