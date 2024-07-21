import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListTodoComponent from "./components/ListTodoComponent";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TodoComponent from "./components/TodoComponent";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import { isUserLoggedIn } from "./services/AuthService";

function App() {
  function AuthenticatedRoute({ children }) {
    const isAuth = isUserLoggedIn();
    return isAuth ? children : <Navigate to="/" />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Login route (assuming it's the default route for /) */}
        <Route path="/" element={<LoginComponent />} />

        {/* Protected routes */}
        <Route
          path="/todos"
          element={
            <AuthenticatedRoute>
              <ListTodoComponent />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/add-todo"
          element={
            <AuthenticatedRoute>
              <TodoComponent />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/update-todo/:id"
          element={
            <AuthenticatedRoute>
              <TodoComponent />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <AuthenticatedRoute>
              <RegisterComponent />
            </AuthenticatedRoute>
          }
        />

        {/* Public routes */}
        <Route path="/login" element={<LoginComponent />} />
      </Routes>
      <HeaderComponent />
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
