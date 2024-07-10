import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks(prevTasks => [...prevTasks, task].sort());
      setTask('');
      inputRef.current.focus();
    }
  };

  const deleteTask = (index) => {
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        id="new-task-input"
        ref={inputRef}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter a new task"
        aria-label="New task input"
      />
      <button id="add-task-button" onClick={addTask}>Add</button>
      <ul id="task-list">
        {tasks.map((task, index) => (
          <li key={index} data-task-id={index}>
            {task}
            <button
              className="delete-task-button"
              onClick={() => deleteTask(index)}
              aria-label={`Delete task ${index + 1}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
