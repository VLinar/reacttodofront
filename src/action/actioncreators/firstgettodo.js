import { FIRST_TODO_IN_STATE } from "../actiontype";
import axios from 'axios'

function getApiTodos(text) {
  return {
    type: FIRST_TODO_IN_STATE,
    payload: text
  };
}

export const getTodos = (obj) => dispatch => {
  axios.get(`http://localhost:3012/todos?page=${obj.page}&limit=${obj.limit}&order_by=${obj.sort}`)
  .then((response) => {
     dispatch(getApiTodos(response.data))
  })  
  .catch((err) => console.log(err))
}

export default getApiTodos;
