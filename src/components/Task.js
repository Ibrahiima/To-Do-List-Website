import React, { useState } from 'react';

const Task = ({ task, markDone, deleteTask }) => {
  const [isDone, setIsDone] = useState(false);

  const handleMarkDone = () => {
    setIsDone(!isDone);
    markDone(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div className="task" style={{ backgroundColor: 'lightblue', padding: '10px', margin: '5px 0', borderRadius: '5px' }}>
      <span className="task-text" style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{task.text}</span>
      <div className="task-buttons">
        <button className="done-button mr-2" onClick={handleMarkDone}>{isDone ? 'Undo' : 'Done'}</button>
        <button className="delete-button" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );;
};

export default Task;








