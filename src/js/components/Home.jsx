import React from 'react';
import Todo from './Todo';
import '../../styles/glassmorphism.css'; 

const Home = () => {
  return (
    
    <div className="container mx-auto p-4 flex justify-center items-start min-h-screen">
      <div className="w-full max-w-2xl mt-10"> {/* Added top margin */}
        {/* Main application heading with animated gradient */}
        <h1 className="text-3xl font-bold mb-8 text-center animated-gradient">
          Todo App
        </h1>

        {/* Core Todo functionality component */}
        <Todo />
      </div>
    </div>
  );
};

export default Home;