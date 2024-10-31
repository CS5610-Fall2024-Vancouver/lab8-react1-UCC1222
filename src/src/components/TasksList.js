// TasksList.js
import React from 'react';

function TasksList({ tasks, deleteTask }) {
  return (
    <>
      {tasks.map((task) => (
        <li key={task.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span>{task.text}</span>
          <button onClick={() => deleteTask(task.id)} style={{ marginLeft: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', padding: '5px 10px' }}>
            Delete
          </button>
        </li>
      ))}
    </>
  );
}

export default TasksList;