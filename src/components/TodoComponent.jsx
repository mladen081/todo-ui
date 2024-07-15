import "./ListTodoComponent.css";
import { useState } from "react";
import { saveTodo } from "../services/TodoService";
import { useNavigate } from "react-router-dom";

import "./TodoComponent.css";

const TodoComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const navigate = useNavigate();

  function saveOrUpdateTodo(e) {
    e.preventDefault();
    const todo = { title, description, completed };
    saveTodo(todo)
      .then((response) => {
        console.log(response.data);
        navigate("/todos");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <h1>Add Todo</h1>
      <div className="form-container">
        <form>
          <label htmlFor="title">Todo Title:</label>
          <input
            type="text"
            placeholder="Enter Todo Title"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>

          <label htmlFor="description">Todo Description:</label>
          <input
            type="text"
            placeholder="Enter Todo Description"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>

          <label htmlFor="completed">Todo Completed:</label>
          <select
            id="completed"
            name="completed"
            value={completed}
            onChange={(e) => setCompleted(e.target.value)}
          >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
          <button
            disabled={!title || !description || !completed}
            onClick={(e) => saveOrUpdateTodo(e)}
          >
            Save Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoComponent;
