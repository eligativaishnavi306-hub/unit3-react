import React, { useState } from 'react';

function Todo() {
  // Part 4: State for storing all todo items 
  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete assignment", completed: false }
  ]);

  // Part 5: State to store the text typed by the user in the input box
  const [newTask, setNewTask] = useState("");

  // Part 6 - Function 1: Updates newTask every time the user types
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  // Part 6 - Function 2: Adds a new task to the list
  const handleAdd = () => {

    if (newTask.trim() === "") return;

    // Create a new task object
    const taskObject = {
      id: Date.now(),
      text: newTask,
      completed: false
    };

    // Update state using setTasks and clear the input field
    setTasks([...tasks, taskObject]);
    setNewTask("");
  };

  // Part 6 - Function 3: Toggles a task's completed value between true and false
  const handleCheck = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // Part 6 - Function 4: Deletes a task permanently from the list
  const handleDelete = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div className="todo-container">
      {/* Part 7: UI Structure */}
      <h1>To do list</h1>

      <div className="input-section">
        <input 
          type="text" 
          placeholder="Add a new task..." 
          value={newTask} 
          onChange={handleChange} 
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul className="task-list">
        {/* Loop through tasks state */}
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            {/* 1. Checkbox */}
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => handleCheck(task.id)} 
            />

            {/* 2. Task Text (Applies  "check" if completed is true) */}
            <span className={task.completed ? "check" : ""}>
              {task.text}
            </span>

            {/* 3. Delete Button */}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;