import React, { useState } from "react";
import { useDispatch } from "react-redux";
import UpdateTodoAPI from '../action/actioncreators/updateTodo'

const Todoedit = props => {
  const [editvalue, setEditvalue] = useState(props.title)
  const dispatch = useDispatch();

  const EditTitle = () => {
    dispatch(UpdateTodoAPI({id:props.tid, title: editvalue}))
    props.setEdit()
  }
  return (
    <div className='todoedit'>
         <input type="text" value={editvalue} onChange={(e) => setEditvalue(e.target.value) }/>
         <button onClick={EditTitle}>Сохранить</button>
    </div>
  );
};

export default Todoedit;
