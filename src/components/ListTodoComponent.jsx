import { useEffect, useState } from "react";
import {
  deleteTodo,
  getAllTodos,
  completeTodo,
  inCompleteTodo,
} from "../services/TodoService";
import "./ListTodoComponent.css";
import { useNavigate } from "react-router-dom";

const ListTodoComponent = () => {
  const [todos, setTodos] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    listTodos();
  }, []);

  function listTodos() {
    getAllTodos()
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewTodo() {
    navigate("/add-todo");
  }

  function updateTodo(id) {
    console.log(id);
    navigate(`/update-todo/${id}`);
  }

  function removeTodo(id) {
    deleteTodo(id)
      .then((response) => {
        console.log(response);
        listTodos();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function markCompleteTodo(id) {
    completeTodo(id)
      .then((response) => {
        console.log(response);
        listTodos();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function markInCompleteTodo(id) {
    inCompleteTodo(id)
      .then((response) => {
        console.log(response);
        listTodos();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <h1>List of Todos</h1>

      <div className="btn-holder">
        <button className="custom-btn" onClick={addNewTodo}>
          Add Todo
        </button>
      </div>

      {todos.map((todo) => (
        <div key={todo.id} className="item">
          <div className="sub-item ">
            <h2>Todo Title</h2>
            <p>{todo.title}</p>
          </div>

          <div className="sub-item ">
            <h2>Todo Description</h2>
            <p>{todo.description}</p>
          </div>

          <div className="sub-item ">
            <h2>Todo Completed</h2>
            <p>{todo.completed ? "yes" : "no"}</p>
          </div>

          <div className="btn-holder">
            <button className="custom-btn" onClick={() => updateTodo(todo.id)}>
              Update
            </button>

            <button className="custom-btn" onClick={() => removeTodo(todo.id)}>
              Delete
            </button>

            <button
              className="custom-btn"
              onClick={() => markCompleteTodo(todo.id)}
            >
              Complete
            </button>

            <button
              className="custom-btn"
              onClick={() => markInCompleteTodo(todo.id)}
            >
              In Complete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListTodoComponent;
