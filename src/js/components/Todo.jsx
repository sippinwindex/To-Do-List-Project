import React, { useState, useEffect } from "react";
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import TodoFooter from "./TodoFooter";

const Todo = () => {
  // State for all todos
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // State for the current filter ('all', 'active', 'completed')
  const [filter, setFilter] = useState('all');

  // State for the counter (load from storage or start fresh)
   const [counter, setCounter] = useState(() => {
    const savedCounter = localStorage.getItem('todoCounter');
    // Ensure counter is always ahead of max existing ID
    const maxId = todos.reduce((max, todo) => Math.max(max, todo.id), 0);
    const initialCounter = savedCounter ? parseInt(savedCounter, 10) : 0;
    return Math.max(initialCounter, maxId);
  });


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('todoCounter', counter.toString());
  }, [todos, counter]); // Dependencies: run effect if todos or counter change


  // Filter todos based on the current filter state
  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'all':
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();

  return (
    // Apply the glass-panel style to the main container
    <div className="glass-panel">
      {/* Removed the extra "Todos" h1 here, rely on Home.jsx title */}
      <TodoHeader
        todos={todos}
        setTodos={setTodos}
        counter={counter}
        setCounter={setCounter}
      />
      <TodoBody
        // Pass the filtered list to the body for rendering
        todos={filteredTodos}
        setTodos={setTodos} // Pass the original setter for modifying todos
      />
      <TodoFooter
        todos={todos} // Pass original todos for counts
        setTodos={setTodos}
        filter={filter} // Pass current filter
        setFilter={setFilter} // Pass filter setter
      />
    </div>
  );
};

export default Todo;