const TodoList = ({setForm, setFormStatus, todos, setTodos}) => {

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

    return (
        <div>
        {todos.map(todo => (
                <div style={{border: '1px solid #000', margin: '20px', padding: '20px'}}>
                    <div>
                        id: {todo.id}
                    </div>

                    <div>
                        title: {todo.title}
                    </div>

                    <div>
                        dec: {todo.dec}
                    </div>

                    <div onClick={() => handleCheck(todo.id)}>
                        state {todo.state ? 'done' : 'not done'}
                    </div>

                    <button onClick={() => handleDelete(todo.id)}>
                        delete
                    </button>
                    <button onClick={() => handleUpdate(todo)}>
                        update
                    </button>

                </div>
            ))}
        </div>
    )
}
export default TodoList;