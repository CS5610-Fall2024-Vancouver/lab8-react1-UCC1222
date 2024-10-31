import React, { useState } from 'react';

function AddTask({ addTask }) {
  const [taskText, setTaskText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    addTask({ text: taskText });
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;