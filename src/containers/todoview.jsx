import React from "react";
import { useDispatch, useSelector} from 'react-redux'
import UpdcheckedAPI from '../action/actioncreators/updatecheked'
import deletetodoapi from '../action/actioncreators/deletetodo'
import './css/todoview.css'

const Todoview = props => {
  const dispatch = useDispatch();
  let reduxstate = useSelector(state => state.Todos)
  return (
    <div 
      className={props.checked ? 'chekedtodo todoview': 'todoview'}
    >
      <div className='grid'>
          <input
            type="checkbox"
            id={"checkbox_id" + props.tid}
            defaultChecked = {props.checked ? true : false}
            onChange={() => dispatch(UpdcheckedAPI({id:props.tid, check: props.checked}))}
          />
      </div>
      <div 
        onClick={props.setEdit}
        className={props.checked ? 'line': ''}
      >
        {props.title}
      </div>
      <div className="inputposition">
          <label 
            id='delete'
            onClick={() => dispatch(deletetodoapi(props.tid, {page:reduxstate.page, limit: reduxstate.limit, sort: reduxstate.sort}))}
          > 
          </label>
      </div>
    </div>
  );
};

export default Todoview;


