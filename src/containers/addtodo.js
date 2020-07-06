import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addTodoAPI from '../action/actioncreators/addtodo'
import './css/addtodo.css'

const AddTodo = (props) => {
  
  const dispatch = useDispatch();
  const [inputtext, setInputtext] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setInputtext(e.target.value)} value={inputtext} />
      <button
        onClick={() => {dispatch(addTodoAPI(inputtext, {page:props.page, limit: props.limit, sort: props.sort} )); setInputtext('')}}
      >
        AddTodo
      </button>
    </div>
  );
};

export default AddTodo;
