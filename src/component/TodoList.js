import React from "react";
import { FaCheckCircle, FaRegCircle, FaRegTrashAlt, FaEdit } from "react-icons/fa";
import '../style/list.css';
import '../App.css';

const TodoList = ({setForm, setFormStatus, todos, setTodos, tags}) => {

    const handleDelete = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const handleCheck = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, state: !todo.state} : todo))
    }

    const handleUpdate = todo => {
        setFormStatus('update')
        setForm(todo)
    }

    const showDec = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, active: true} : {...todo, active: false}))
    }

    return (
        <div>
        {todos.map(todo => (
                <div className="todoItem" style={todo.state ? {borderColor: '#D8D8D8'} : {borderColor: tags.filter(t => t.tag == todo.tag)[0].color, backgroundColor: tags.filter(t => t.tag == todo.tag)[0].color}}>
                    <div className='checkItem'>
                        <div onClick={() => handleCheck(todo.id)}>
                            {todo.state ? <FaCheckCircle className='doneCircle'/> : <FaRegCircle className='notDoneCircle'/>}
                        </div>
                    </div>
                    <div className='todoText'  onClick={() => showDec(todo.id)}>
                        <h4 className='todoTitle' style={todo.state ? {color: '#959595', textDecorationLine: 'line-through' } : {}}>
                            {todo.title}
                        </h4>
                        <p className='todoDec' style={todo.active ? {display: 'flex'} : {display: 'none'}}>
                            {todo.dec}
                        </p>
                    </div>
                    <div className='todoButton'>
                        <button onClick={() => handleDelete(todo.id)}>
                            <FaRegTrashAlt className='todoIcon'/>
                        </button>
                        <button onClick={() => handleUpdate(todo)}>
                            <FaEdit className='todoIcon'/>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default TodoList;