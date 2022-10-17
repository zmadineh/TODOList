import React from "react";
import {useDispatch} from "react-redux";
//import {useSelector} from "react-redux";
import {addTodo, updateTodo} from "../toolkit/slices/todo.slice";
import '../App.css';
import clsx from "clsx";
import {emptyForm} from "../data/emptyForm";

const TodoForm = ({lastId, setLastId, form, setForm, formStatus, setFormStatus, tags, setTags , formEnable, setFormEnable}) => {

    //const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    const handleChange = e => {
        setTags(tags.map(t => t.tag === e.target.value ? {...t ,check: true} : {...t ,check: false}))
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (formStatus === 'add'){
            if (form.title === '' || form.dec === '' || form.tag === '')
                alert('Enter inputs')
            else {
                const newTodo =  {
                    id: lastId + 1,
                    check: false,
                    active: false,
                    ...form,
                };
                dispatch(addTodo(newTodo));
                setLastId(lastId + 1)
            }
        }
        else {
            dispatch(updateTodo(form));
            closeForm();
        }
    }

    const closeForm = () => {
        setForm(emptyForm)
        setFormStatus('close')
        setFormEnable(false)
    }

    return (
        <div className='form-container'>
            <div className={clsx('wrapper', formEnable && 'max_h', !formEnable && 'min_h')}>
                <form onSubmit={handleSubmit}>
                    <div className='todoForm'>
                        <h4>Title</h4>
                        <input className={clsx('formTitle_input', 'margin_20')} onChange={handleChange} name={'title'} value={form.title} />
                        <h4>Description</h4>
                        <input className={clsx('formDec_input', 'margin_20')}  onChange={handleChange} name={'dec'} value={form.dec} />
                    </div>

                    <div className='selectLabel'>
                        <h4>Select label: </h4>
                        <div className='tagsColorContainer'>
                            {tags.map(t => (
                                <div key={t.tag} className='tagsColor' style={{backgroundColor: t.color}}>
                                    <input className='color_input' type={"checkbox"} onChange={handleChange} name={'tag'} value={t.tag} checked={t.check}/>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className='formBtnContainer'>
                        <button className='formSubmit_btn' type={'submit'}>
                            {formStatus === 'add' ? 'submit' : 'update'}
                        </button>
                        <button className='formSubmit_btn' onClick={closeForm}>
                            close
                        </button>
                    </div>

                </form>
            </div>

        </div>
    )
}
export default TodoForm;
