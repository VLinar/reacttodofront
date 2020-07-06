import { UPDATE_TODO_TITLE_IN_STATE } from "../actiontype";
import axios from 'axios'

function updatetodo(obj) {
  return {
    type: UPDATE_TODO_TITLE_IN_STATE,
    payload: obj
  };
}

const UpdateTodoAPI = (text) => dispatch => {
    axios.put(`http://localhost:3012/todos/${text.id}`, {
      title: text.title,
      checked: false
    })
    .then(res => {
        dispatch(updatetodo(text))
    })
    .catch(err => console.log(err))
}

export default UpdateTodoAPI;
