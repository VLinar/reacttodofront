// import { DELETE_TODO_IN_STATE } from "../actiontype";
import {getTodos} from '../actioncreators/firstgettodo'
import axios from 'axios'

// function deletetodo(id) {
//   return {
//     type: DELETE_TODO_IN_STATE,
//     payload: id
//   };
// }

const deletetodoapi = (id, obj) => dispatch => {
  axios.delete(`http://localhost:3012/todos/${id}`)
  .then(res => {
    console.log(res.data)
    dispatch(getTodos(obj))
  })
  .catch(err => console.log(err))
}

export default deletetodoapi;
