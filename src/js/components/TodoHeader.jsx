import React, { useState } from 'react';

// Receive counter and setCounter as props
const TodoHeader = ({ todos, setTodos, counter, setCounter }) => {
    const [newTodo, setNewTodo] = useState("");

    const addTask = () => {
        const trimmedText = newTodo.trim();
        if (!trimmedText) {
            alert("Please enter a valid task");
            return; // Prevent adding empty task
        }

        // Create new todo object
        const newTask = {
            id: counter + 1, // Use the counter prop for the new ID
            text: trimmedText,
            completed: false
        };

        // Update todos state
        setTodos(prevTodos => [...prevTodos, newTask]); // Safer update
        setCounter(prev => prev + 1); // Increment counter via prop function
        setNewTodo(""); // Clear input
    };

    // Handle Enter key press in input
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    };

    return (
        // Use mb-4 for spacing below header
        <header className="todo-header mb-6 flex items-center gap-4"> {/* Use flex for layout */}
            <input
                type="text"
                // Style the input for better visibility on glass
                className="new-todo flex-grow p-3 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/20 placeholder-gray-300 text-white"
                placeholder="What needs to be done?"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={handleKeyPress} 
            />
            <button
                // Apply btn styles from CSS
                className="add-task btn btn-primary shrink-0" // shrink-0 prevents button from shrinking
                onClick={addTask} // Directly call addTask
            >
                Add Task
            </button>
        </header>
    );
};

export default TodoHeader;