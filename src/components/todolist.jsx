import React from 'react'
import { useState } from 'react';

const todolist = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [filter, setFilter] = useState("all");
    const addTodo = () => {
        if (newTodo.trim() !== "") {
          const todoItem = { text: newTodo, completed: false };
          setTodos(prevTodos => [...prevTodos, todoItem]);
          setNewTodo("");
        }
      };
    
      const removeTodo = index => {
        setTodos(prevTodos => prevTodos.filter((_, i) => i !== index));
      };
      const toggleTodo = index => {
        setTodos(prevTodos =>
          prevTodos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };
    
      const filterTodos = () => {
        switch (filter) {
          case "doing":
            return todos.filter(todo => !todo.completed);
          case "done":
            return todos.filter(todo => todo.completed);
          default:
            return todos;
        }
      };
  return (
    <div className="todo-list">
      <h3>Todo List</h3>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div>
        <button style={{width:'4rem',height:'1.2rem'}} onClick={() => setFilter("all")}>All</button>
        <button style={{width:'4rem',height:'1.2rem'}} onClick={() => setFilter("doing")}>Doing</button>
        <button style={{width:'4rem',height:'1.2rem'}} onClick={() => setFilter("done")}>Done</button>
      </div>
      <ul>
        {filterTodos().map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            <span onClick={() => toggleTodo(index)}>{todo.text}</span>{" "}
            {/* <button onClick={() => removeTodo(index)}>Remove</button> */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default todolist