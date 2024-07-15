import { useEffect, useState } from "react";
import { getAllTodos } from "../services/TodoService";
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

  return (
    <div className="container">
      <h1>List of Todos</h1>

      <div className="btn-holder">
        <button className="custom-btn" onClick={addNewTodo}>
          Add Todo
        </button>
      </div>
      <br />
      <br />
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
        </div>
      ))}
    </div>
  );
};

export default ListTodoComponent;
