import { FaTrash } from 'react-icons/fa';

function Task({ task, deleteTask }) {
  return (
    <li className="task-item">
      <span className="task-text">{task.text}</span>
      <FaTrash 
        className="delete-icon"
        onClick={() => deleteTask(task.id)}
      />
    </li>
  );
}

export default Task;