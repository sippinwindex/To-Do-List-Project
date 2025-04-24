// TodoBody.jsx

const TodoBody = ({ todos, setTodos }) => {

  const toggleComplete = (id) => { /* ... (no changes needed) */ };

  // --- MODIFIED deleteTodo ---
  const deleteTodo = (id) => {
    const itemElement = document.querySelector(`[data-todo-id="${id}"]`); // Add data-todo-id attribute to your div

    if (itemElement) {
      // 2. Add the 'exiting' class to trigger the CSS animation
      itemElement.classList.add('exiting');

      // 3. Wait for the animation to finish (match CSS duration), then update state
      setTimeout(() => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
      }, 500); // 500ms matches the itemFadeOut animation duration
    } else {
      // Fallback if element not found (shouldn't happen often)
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }
  };

  if (todos.length === 0) {
    // Apply the new CSS class here
    return <p className="empty-list-message">No tasks yet!</p>;
  }

  return (
    <div className="todo-body">
      {todos.map(todo => (
        <div
          key={todo.id}
          data-todo-id={todo.id} // <<< ADD THIS DATA ATTRIBUTE
          className={`todo-item flex justify-between items-center text-white`} // Removed opacity logic, handled by CSS
        >
          {/* Apply 'completed' class to the span directly */}
          <span
            className={`cursor-pointer ${todo.completed ? 'completed' : ''}`} // Apply .completed class here
            onClick={() => toggleComplete(todo.id)}
            // style={{ flexGrow: 1, marginRight: '1rem' }} // <<< REMOVE inline style, handled by CSS
          >
            {todo.text}
          </span>
          <button
            className="delete-btn" // <<< USE the new CSS class
            onClick={() => deleteTodo(todo.id)}
            aria-label={`Delete task ${todo.text}`}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoBody;