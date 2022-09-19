const TodoForm = ({lastId, setLastId, form, setForm, formStatus, setFormStatus, todos, setTodos}) => {

    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (formStatus === 'add'){
            setTodos( [...todos, {id: lastId+1, title: form.title, dec: form.dec, state: false}])
            setLastId(lastId+1)
        }
        else {
            setTodos(todos.map(todo => todo.id === form.id ? form: todo))
        }
        setForm({title: '', dec:''})
        setFormStatus('add')
    }

    return (
        <div style={{margin: '20px'}}>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name={'title'} value={form.title} style={{marginRight: '20px'}}/>
                <input onChange={handleChange} name={'dec'} value={form.dec} style={{marginRight: '20px'}}/>
                <button type={'submit'}>
                    {formStatus === 'add' ? 'submit' : 'update'}
                </button>
            </form>
        </div>
    )
}
export default TodoForm;
