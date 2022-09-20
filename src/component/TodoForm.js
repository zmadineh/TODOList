import React from "react";
import '../style/form.css';
import '../App.css';

const TodoForm = ({lastId, setLastId, form, setForm, formStatus, setFormStatus, todos, setTodos, tags, setTags , formEnable, setFormEnable}) => {

    const handleChange = e => {
        setTags(tags.map(t => t.tag === e.target.value ? {...t ,check: true} : {...t ,check: false}))
        setForm({...form, [e.target.name]: e.target.value})
        //console.log(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (formStatus === 'add'){
            if (form.title == '' || form.dec == '' || form.tag == '')
                alert('Enter inputs')
            else {
                setTodos([...todos, {
                    id: lastId + 1,
                    title: form.title,
                    dec: form.dec,
                    state: false,
                    tag: form.tag,
                    active: false
                }])
                setLastId(lastId + 1)
            }
        }
        else {
            setTodos(todos.map(todo => todo.id === form.id ? form: todo))
            console.log(form.tag)
        }
        setForm({title: '', dec:'', tag:'default'})
        setFormStatus('add')
        setFormEnable(false)
    }

    const handleForm= () => {
        setFormEnable(true)
    }

    return (
        <div className='form-container'>
            <div className='addNewItem' onClick={handleForm} style={formEnable ? {display: 'none'} : {display: 'flex'}}>
               <span>+ Add new</span>
            </div>
            <div className='wrapper' style={formEnable ? {height: '100%'} : {height: '1px'}}>
                <form onSubmit={handleSubmit}>
                    <div className='todoForm'>
                        <h4>Title</h4>
                        <input className='formTitle_input' onChange={handleChange} name={'title'} value={form.title} style={{marginRight: '20px'}}/>
                        <h4>Description</h4>
                        <input className='formDec_input' onChange={handleChange} name={'dec'} value={form.dec} style={{marginRight: '20px'}}/>
                    </div>

                    <div className='selectLabel'>
                        <h4>Select label: </h4>
                        <div className='tagsColorContainer'>
                            {tags.map(t => (
                                <div className='tagsColor' style={{backgroundColor: t.color}}>
                                    <input className='color_input' type={"checkbox"} onClick={handleChange} name={'tag'} value={t.tag} checked={t.check}/>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className='formBtnContainer'>
                        <button className='formSubmit_btn' type={'submit'}>
                            {formStatus === 'add' ? 'submit' : 'update'}
                        </button>
                    </div>

                </form>
            </div>

        </div>
    )
}
export default TodoForm;
