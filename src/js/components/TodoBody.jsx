// TodoBody.jsx

const TodoBody = ({ todos, setTodos }) => {

  const toggleComplete = (id) => { /* ... (no changes needed) */ };

  // --- MODIFIED deleteTodo ---
  const deleteTodo = (id) => {
    const itemElement = document.querySelector(`[data-todo-id="${id}"]`); // Add data-todo-id attribute to your div

    if (itemElement) {

      // 2. Add the 'exiting' class to trigger the CSS animation
      // 3. The TodoBody will render the todos in a list, column etc.
      // 4. to be able to delete X or delete or an input to remove a finished to-do.

      // 1. Rendering the todos as a list from the array. (Mapping the array)
      // 2. If there no tasks in the list, make a If and Else to let the user know to add a task (conditional)
      // 3. Be able to deleting the todos.

          // const TodoBody = ({ todos, setTodos}) => {}. <- brining the setTodos in to be rendered
          // we need two functions:

          // a function to render the todos array
            // const renderTodos = todos.map(todoItem) => {
              // return(
              // <li className="todo-item" key={todoItem.id}>
                //<p>{todoItem.todo}</h3>
              //</li>
           // );
           //});
          //  a function to delete a selected todo element
          //  declare a variable called updatedTodos
          //  assing it the FILTERED todos array by removing the todo with the passed id argument
          //  todos.filter()
          //  3. setTodos with the updatedTodos 
          //  USING FILTER todos.filter
          //  const updatedTodos = todos.filter((todoItem)) => todoItem.id != id)
          //  setTodos(updatedTodos);

      // the return statement we focus only on displaying the "No tasks, add a task string"

      // <> 
        // <section ClassName="main">
        // <ul className="todo-list">
            // {todos.lenght ! === 0 ?}
          
        // create a ternary that will check the lenght of the todo
        // list. If its not zero, call the renderTodos functions
        // otherwise display "No task, add a task"
          
          //   } 

        // Footer function
        // user interface 
        // 1. should render the number of todos items left
        
        // logic: rendering number of items left
           // 
           // 1 array.lenght to determine how many todo items are left 
           // 2 "items left" or "x item left"
           // "x items left" when lenght > 1 or lenght == 0
           // "x item left" when lenght === 1
           // conditonal to chech the lenght and display the proper string
           // const TodoFooter = ({ todos }) => {
           // todos.lenght !== 1 ? `${todos.lenght} items left ` : `${todos.lenght} items left`
           //  }


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


  // Render todos array:
  // const renderTodos = () => {}
    // return ()
  // a function to delete a selected todo element
  // const deleteTodo = () => {}
  // <section className="main">
  // <ul className="todo-list">
    // {todos}
  // <TodoFooter
    // todos={todos}

    // const appendArray
    
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