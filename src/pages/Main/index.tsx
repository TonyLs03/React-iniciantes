import React, { useState } from "react";
import { CgTrash } from 'react-icons/cg';

import './styles.css'

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleAddClick = () => {
   setTodoList([...todoList, inputValue]);
   setInputValue('')
  };

  const handleClear = () => {
    setTodoList([])
  };

  const deleteItem = (todo: string) => setTodoList(prev => prev.filter((t) => t.toLocaleLowerCase().trim() 
  !== todo.toLowerCase().trim()))

 return (
  <div className='container'>
    <h1 className="title">To Do App</h1>
    <div className="form-group">
      <input 
        className="todo-input"
        type="text"
        placeholder="Adicione nova tarefa"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        />
        <button onClick={handleAddClick} className="btn-add">
          +
        </button>
    </div>
    <div className="todo-list">
      <ul>
        {todoList.map((todo) => (
          <li className="list-item">
            {todo}
            <button
              onClick={() => deleteItem(todo)}
              className="button-trash">
              <CgTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
    <div>
        {todoList.length} tarefas pendentes
        <button onClick={handleClear} className="btn-component">
          Limpar tudo
        </button>
    </div>
  </div>
 )
}

 export default Main;
