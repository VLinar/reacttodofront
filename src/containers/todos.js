import React from "react";
import Todo from "../components/onetodo";

const Todos = props => {
  return (
    <div>      
      {props.todos.map(e => (
        <Todo id={e.id} key={e.id} title={e.title} checked={e.checked} />
      ))}
    </div>
  );
};

export default Todos;
