import TodoForm from "../component/TodoForm";
import TodoList from "../component/TodoList";
import React, {useState} from "react";
import '../App.css';
import {useDispatch, useSelector} from "react-redux";
import {FaPlus} from "react-icons/fa";
import {emptyForm} from "../data/emptyForm";
import clsx from "clsx";
import Filter from "../component/Filter";
import {collapseTodo} from "../toolkit/slices/todo.slice";


const HomePage = () => {

    const [tags, setTags] = useState( [
        {label: 'Personal', value: '#eeff9d', check: false},
        {label: 'Family', value: '#ffe0b0', check: false},
        {label: 'Travel', value: '#ffc1ac', check: false},
        {label: 'Life', value: '#ffadc7', check: false},
        {label: 'Work', value: '#b4ffd9', check: false},
        {label: 'Education', value: '#bbfff6', check: false},
        {label: 'Sport', value: '#a5c2ff', check: false},
        {label: 'No category', value: '#d8d8fc', check: true},
    ])

    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    const [form, setForm] = useState(emptyForm)
    const [formStatus, setFormStatus] = useState('add')
    const [lastId, setLastId] = useState(todos.length !== 0 ? todos[todos.length-1].id : 0)
    const [formEnable, setFormEnable] = useState(false)
    const [filterSelected, setFilterSelected] = useState('All')
    const [tagSelected, setTagSelected] = useState( 'default')
    const [search, setSearch] = useState('')

    const disableWrapper = () => {
        dispatch(collapseTodo());
    }

    const handleAdd = () => {
        setFormEnable(true)
        setFormStatus('add')
    }

    return (
        <div className={clsx('center')} >
            <div className={'overlay'} onClick={disableWrapper}></div>

            <button onClick={handleAdd} className={'add_btn'}>
                <FaPlus className='todoIcon'/>
            </button>

            <div className='main'>
                <div className='header'>
                    <h1 className={'header_title'}>ToDo</h1>
                    <Filter
                        tags={tags}
                        filterSelected={filterSelected}
                        setFilterSelected={setFilterSelected}
                        tagSelected={tagSelected}
                        setTagSelected={setTagSelected}
                        setSearch={setSearch} />
                </div>

                <TodoForm
                    lastId={lastId}
                    setLastId={setLastId}
                    form={form}
                    setForm={setForm}
                    formStatus={formStatus}
                    setFormStatus={setFormStatus}
                    tags={tags} setTags={setTags}
                    formEnable={formEnable}
                    setFormEnable={setFormEnable} />

                <TodoList
                    setForm={setForm}
                    setFormStatus={setFormStatus}
                    tags={tags}
                    setFormEnable={setFormEnable}
                    filterSelected={filterSelected}
                    tagSelected={tagSelected}
                    search={search} />


            </div>

        </div>
    )
}

export default HomePage;