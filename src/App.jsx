import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListTodoComponent from "./components/ListTodoComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoComponent from "./components/TodoComponent";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />}></Route>
          <Route path="/todos" element={<ListTodoComponent />}></Route>
          <Route path="/add-todo" element={<TodoComponent />}></Route>
          <Route path="/update-todo/:id" element={<TodoComponent />}></Route>

          <Route path="/register" element={<RegisterComponent />}></Route>
          <Route path="/login" element={<LoginComponent />}></Route>
        </Routes>
        <HeaderComponent />
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
