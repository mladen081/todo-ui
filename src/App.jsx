import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListTodoComponent from "./components/ListTodoComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoComponent from "./components/TodoComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListTodoComponent />}></Route>
          <Route path="/todos" element={<ListTodoComponent />}></Route>
          <Route path="/add-todo" element={<TodoComponent />}></Route>
          <Route path="/update-todo/:id" element={<TodoComponent />}></Route>
        </Routes>
        <HeaderComponent />
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
