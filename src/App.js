import {useState} from "react";

function App() {

  const [todos, setTodos] = useState( [
    {id: 1, title: 'buy milk', state: true, dec: 'import'},
    {id: 2, title: 'buy ticket', state: true, dec: 'import',}
  ])
  const [form, setForm] = useState( {title: '', dec: ''})
  const [formStatus, setFormStatus] = useState('add')
  const [lastId, setLastId] = useState(todos[todos.length-1].id)


  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleCheck = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, state: !todo.state} : todo))
  }

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

  const handleUpdate = todo => {
    setFormStatus('update')
    setForm(todo)
  }

  return (
      <div>
        <div>
          <h1 style={{margin: '20px'}}>ToDo form</h1>

          <div style={{margin: '20px'}}>
            <form onSubmit={handleSubmit}>
              <input onChange={handleChange} name={'title'} value={form.title} style={{marginRight: '20px'}}/>
              <input onChange={handleChange} name={'dec'} value={form.dec} style={{marginRight: '20px'}}/>
              <button type={'submit'}>
                {formStatus === 'add' ? 'submit' : 'update'}
              </button>
            </form>
          </div>

        </div>

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
  );
}

export default App;







