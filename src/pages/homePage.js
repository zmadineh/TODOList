import TodoForm from "../component/TodoForm";
import TodoList from "../component/TodoList";
import React, {useState} from "react";
import '../App.css';
import {useSelector} from "react-redux";
import {FaPlus} from "react-icons/fa";
import {emptyForm} from "../data/emptyForm";
import clsx from "clsx";

const HomePage = () => {

    const [tags, setTags] = useState( [
        {tag: '1', color: '#eeff9d', check: false},
        {tag: '2', color: '#ffe0b0', check: false},
        {tag: '3', color: '#ffc1ac', check: false},
        {tag: '4', color: '#ffadc7', check: false},
        {tag: '5', color: '#b4ffd9', check: false},
        {tag: '6', color: '#bbfff6', check: false},
        {tag: '7', color: '#b3cdff', check: false},
        {tag: 'default', color: '#CCCCFF', check: true},
    ])

    const todos = useSelector((state) => state.todo.todos);

    const [form, setForm] = useState( emptyForm)
    const [formStatus, setFormStatus] = useState('add')
    const [lastId, setLastId] = useState(todos[todos.length-1].id)
    const [formEnable, setFormEnable] = useState(false)

    const handleAdd = () => {
        setFormEnable(true)
        setFormStatus('add')
    }

    return (
        <div className={clsx('center', 'relative_pos')} >
            <div className='main'>
                <div className='header'>
                    <h1 className={'header_title'}>ToDo</h1>
                </div>

                <TodoForm lastId={lastId} setLastId={setLastId} form={form} setForm={setForm} formStatus={formStatus} setFormStatus={setFormStatus} tags={tags} setTags={setTags} formEnable={formEnable} setFormEnable={setFormEnable}/>
                <TodoList setForm={setForm} setFormStatus={setFormStatus} tags={tags} setFormEnable={setFormEnable}/>

                <button onClick={handleAdd} className={'add_btn'}>
                    <FaPlus className='todoIcon'/>
                </button>
            </div>

        </div>
    )
}

export default HomePage;