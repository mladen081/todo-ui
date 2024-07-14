import axios from "axios";

const BASE_URL = "https://todo-q4uj.onrender.com/api/todos";

// export function getAllTodos() {
//   return axios.get(BASE_URL);
// }

export const getAllTodos = () => axios.get(BASE_URL);
