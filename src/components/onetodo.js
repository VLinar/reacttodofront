import React, { useState } from "react";
import Todoview from '../containers/todoview'
import Todoedit from '../containers/todoedit'

const Todo = props => {
  const [edit, setEdit] = useState(true)
  const EditUpdate = () => {
    setEdit(!edit)
  }
  return (
    <div>
      {edit === true
      ?
      <Todoview tid={props.id} title={props.title} edit={edit} setEdit={EditUpdate} checked={props.checked}/>
      :
      <Todoedit tid={props.id} title={props.title} edit={edit} setEdit={EditUpdate} checked={props.checked}/>
      }
    </div>
  );
};

export default Todo;
