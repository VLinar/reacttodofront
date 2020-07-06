import { UPDATE_CHECKED_TODO_IN_STATE } from "../actiontype";
import axios from 'axios'

function updchecked(id) {
  return {
    type: UPDATE_CHECKED_TODO_IN_STATE,
    payload: id
  };
}

const UpdcheckedAPI = (text) => dispatch => {
  axios.put(`http://localhost:3012/todos/${text.id}`, {
    checked: !text.check
  })
  .then(res => {
      dispatch(updchecked(text.id))
  })
  .catch(err => console.log(err))
}

export default UpdcheckedAPI;
