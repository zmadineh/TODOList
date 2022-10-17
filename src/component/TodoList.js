import React from "react";
import { FaCheckCircle, FaRegCircle, FaRegTrashAlt, FaEdit, FaPlus } from "react-icons/fa";
import '../App.css';
import {useDispatch, useSelector} from "react-redux";
import {removeTodo, checkTodo, showTodoDec} from "../toolkit/slices/todo.slice";

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

    return (
        <div className='todoContainer'>
        {todos.length>0 ? todos.map(todo => (
                <div key={todo.id} className="todoItem" style={todo.check ? {borderColor: '#D8D8D8'} : {borderColor: tags.filter(t => t.tag === todo.tag)[0].color, backgroundColor: tags.filter(t => t.tag === todo.tag)[0].color}}>
                    <div className='checkItem'>
                        <div onClick={() => handleCheck(todo)}>
                            {todo.check ? <FaCheckCircle className='doneCircle'/> : <FaRegCircle className='notDoneCircle'/>}
                        </div>
                    </div>
                    <div className='todoText'  onClick={() => showDec(todo)}>
                        <h4 className='todoTitle' style={todo.check ? {color: '#959595', textDecorationLine: 'line-through' } : {}}>
                            {todo.title}
                        </h4>
                        <p className='todoDec' style={todo.active ? {display: 'flex'} : {display: 'none'}}>
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