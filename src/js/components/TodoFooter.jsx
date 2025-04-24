import React from 'react';

// Receive filter state and setter
const TodoFooter = ({ todos, setTodos, filter, setFilter }) => {
  const activeTodosCount = todos.filter(todo => !todo.completed).length;
  const completedTodosCount = todos.length - activeTodosCount;

  // Clear completed tasks
  const clearCompleted = () => {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed));
  };

  // Helper to create button className based on active filter
  const getButtonClass = (buttonFilter) => {
      // Basic button styles from CSS + conditional active style
      let classes = 'btn mx-1 '; // Base class + margin
      if (buttonFilter === filter) {
          classes += 'bg-white/30'; // Style for the active filter button
      } else {
          classes += 'bg-white/10 hover:bg-white/20'; // Style for inactive buttons
      }
      return classes;
  };

  // Only render footer if there are any todos
  if (todos.length === 0) {
    return null;
  }

  return (
    // Use mt-6 for spacing above footer, adjust text color
    <div className="todo-footer pt-4 mt-6 border-t border-white/20 text-gray-300">
      {/* Status display */}
      <div className="flex justify-between items-center mb-4 text-sm px-2">
        <span>{activeTodosCount} items left</span>
        {/* Conditionally render Clear Completed button */}
        {completedTodosCount > 0 && (
             <button
                className="hover:text-white text-red-400 hover:text-red-500 transition-colors duration-200"
                onClick={clearCompleted}
            >
                Clear Completed ({completedTodosCount})
            </button>
        )}
      </div>

      {/* Filter buttons */}
      <div className="flex justify-center items-center space-x-2 mb-2">
        <button
          className={getButtonClass('all')}
          onClick={() => setFilter('all')} // Update filter state onClick
        >
          All
        </button>
        <button
          className={getButtonClass('active')}
          onClick={() => setFilter('active')} // Update filter state onClick
        >
          Active
        </button>
        <button
          className={getButtonClass('completed')}
          onClick={() => setFilter('completed')} // Update filter state onClick
        >
          Completed
        </button>
      </div>

    </div>
  );
};

export default TodoFooter;