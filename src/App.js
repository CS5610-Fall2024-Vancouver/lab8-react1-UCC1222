import { useState } from 'react';
import Header from './components/Header';
import TasksList from './components/TasksList';
import AddTask from './components/AddTask';

function App() {
  const initialTasks = [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Do homework" },
    { id: 3, text: "Cook dinner" },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <Header toggleForm={toggleForm} showForm={showForm} />
      {showForm && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <ul className="tasks-list">
          <TasksList tasks={tasks} deleteTask={deleteTask} />
        </ul>
      ) : (
        <p className="no-tasks-message">No tasks left</p>
      )}
    </div>
  );
}

export default App;