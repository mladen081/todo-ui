import "./ListTodoComponent.css";
import { useEffect, useState } from "react";
import { getTodo, saveTodo, updateTodo } from "../services/TodoService";
import { useNavigate, useParams } from "react-router-dom";

import "./TodoComponent.css";

const TodoComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  function saveOrUpdateTodo(e) {
    e.preventDefault();
    const todo = { title, description, completed };

    if (id) {
      updateTodo(id, todo)
        .then((response) => {
          console.log(response.data);
          navigate("/todos");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      saveTodo(todo)
        .then((response) => {
          console.log(response.data);
          navigate("/todos");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function pageTitle() {
    if (id) {
      return <h1>Update Todo</h1>;
    } else {
      return <h1>Add Todo</h1>;
    }
  }

  useEffect(() => {
    if (id) {
      getTodo(id)
        .then((response) => {
          console.log(response.data);
          setTitle(response.data.title);
          setDescription(response.data.description);
          setCompleted(response.data.completed);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  return (
    <div className="container">
      {pageTitle()}
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
