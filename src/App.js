import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import "./components/TaskForm.css"
import "./components/TaskList.css"
import "./components/Task.css"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
    };
    setTasks([...tasks, newTask]);
  };

  const markDone = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isDone: !task.isDone
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} markDone={markDone} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
