import React from "react";
import { useState } from "react";
import './App.css';
import TodoForm from "./component/TodoForm";
import TodoList from  './component/TodoList';

function App() {

  const [todos, setTodos] = useState( [
    {id: 1, title: 'buy milk', state: true, dec: 'import', tag: '3', active: false},
    {id: 2, title: 'buy ticket', state: false, dec: 'import', tag: '5', active: false}
  ])
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

  const [form, setForm] = useState( {title: '', dec: '', tag: 'default'})
  const [formStatus, setFormStatus] = useState('add')
  const [lastId, setLastId] = useState(todos[todos.length-1].id)
  const [formEnable, setFormEnable] = useState(false)

  return (
      <div className='center'>
        <div className='main'>
            <div className='header'>
                <h1 style={{margin: '20px'}}>ToDo</h1>
            </div>

          <TodoForm lastId={lastId} setLastId={setLastId} form={form} setForm={setForm} formStatus={formStatus} setFormStatus={setFormStatus} todos={todos} setTodos={setTodos} tags={tags} setTags={setTags} formEnable={formEnable} setFormEnable={setFormEnable}/>
          <TodoList setForm={setForm} setFormStatus={setFormStatus} todos={todos} setTodos={setTodos} tags={tags} setFormEnable={setFormEnable}/>

        </div>
      </div>
  );
}

export default App;







