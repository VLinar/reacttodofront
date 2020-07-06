// import { ADD_TODO_TO_STATE } from "../actiontype";
import axios from 'axios'
import {getTodos} from './firstgettodo'

// function addTodo(text) {
//   return {
//     type: ADD_TODO_TO_STATE,
//     payload: text
//   };
// }

const addTodoAPI = (text, obj) => dispatch => {
  axios.post('http://localhost:3012/todos', {
    title: text,
    checked: false
  })
  .then((res) => {
    dispatch(getTodos(obj))
  })
  .catch((err) => console.log(err))
}

export default addTodoAPI;
