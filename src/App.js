import { useState } from "react";
import TodoForm from "./component/TodoForm";
import TodoList from  './component/TodoList';

function App() {

  const [todos, setTodos] = useState( [
    {id: 1, title: 'buy milk', state: true, dec: 'import'},
    {id: 2, title: 'buy ticket', state: true, dec: 'import',}
  ])
  const [form, setForm] = useState( {title: '', dec: ''})
  const [formStatus, setFormStatus] = useState('add')
  const [lastId, setLastId] = useState(todos[todos.length-1].id)




  return (
        <div>
          <h1 style={{margin: '20px'}}>ToDo form</h1>

          <TodoForm lastId={lastId} setLastId={setLastId} form={form} setForm={setForm} formStatus={formStatus} setFormStatus={setFormStatus} todos={todos} setTodos={setTodos} />
          <TodoList setForm={setForm} setFormStatus={setFormStatus} todos={todos} setTodos={setTodos} />

        </div>
  );
}

export default App;







