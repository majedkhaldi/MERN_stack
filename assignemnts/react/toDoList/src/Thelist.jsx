import React, { useState } from 'react';

export default function TheList() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, { name: taskText, isDone: false }]);
    setTaskText('');
  }

  function handleCheck(index) {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, isDone: !task.isDone } : task
    );
    setTasks(newTasks);
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <input type='submit' value='Add' />
      </form>
      {tasks.map((task, index) => (
        <div key={index} style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={() => handleCheck(index)}
          />
          {task.name}
          <button onClick={() => deleteTask(index)}>delete</button>
        </div>
      ))}
    </>
  );
}
