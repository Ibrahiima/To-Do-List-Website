import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    addTask(taskText);
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input 
        type="text" 
        value={taskText} 
        onChange={handleChange} 
        className="form-control mr-2" 
        placeholder="Enter task..." 
        required 
      />
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  );
};

export default TaskForm;
