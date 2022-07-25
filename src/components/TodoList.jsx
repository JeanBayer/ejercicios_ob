import { useState } from "react";
import useList from "../hooks/useList";

const TodoList = () => {
  const tasks = useList([]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;
    tasks.push(newTask);
    setNewTask("");
  };

  return (
    <div className="todo-contenedor">
      <h1>TodoList</h1>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a task"
        />
        <button type="submit">Add</button>
      </form>
      {!tasks.isEmpty() && (
        <div className="todo-options">
          <button onClick={() => tasks.clear()}>clear</button>
          <button onClick={() => tasks.sort()}>sort</button>
          <button onClick={() => tasks.reverse()}>reverse</button>
        </div>
      )}
      <div className="todo-list_items">
        <ul>
          {tasks.isEmpty() ? (
            <li>No tasks</li>
          ) : (
            tasks.value.map((task, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  onClick={() => tasks.remove(index)}
                  checked={false}
                />
                {task}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
