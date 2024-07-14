import { useEffect, useState } from "react";
import { getAllTodos } from "../services/TodoService";
import "./ListTodoComponent.css";
const ListTodoComponent = () => {
  const [todos, setTodos] = useState([]);

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

  return (
    <div className="container">
      <h1>List of Todos</h1>
      <br />
      <br />
      {todos.map((todo) => (
        <div key={todo.id}>
          <h2>Todo Title</h2>
          <p>{todo.title}</p>
          <br />
          <br />
          <h2>Todo Description</h2>
          <p>{todo.description}</p>
          <br />
          <br />
          <h2>Todo Completed</h2>
          <p>{todo.completed ? "yes" : "no"}</p>
          <br />
          <br />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ListTodoComponent;
