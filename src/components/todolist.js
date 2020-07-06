import React, { useEffect, useCallback } from "react";
import Todos from "../containers/todos";
import AddTodo from "../containers/addtodo";
import TodoPagination from '../containers/todopagination'
import {getTodos} from '../action/actioncreators/firstgettodo'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './TodoList.css'

const TodoList = props => {
  const dispatch = useDispatch();

  let reduxstate = useSelector(state => state.Todos) 
  
  const stableDispatch = useCallback(dispatch, [])

  useEffect(() => {
      stableDispatch(getTodos({page:reduxstate.page, limit: reduxstate.limit, sort: reduxstate.sort}))
  },[reduxstate.page, reduxstate.limit, reduxstate.sort, stableDispatch])

  return (
    <div>
      <div>its Todolist</div>
      <div className='todo'>
        <div>
          <Todos todos={reduxstate.todos}/>
        </div>
        <div>
          <TodoPagination page={reduxstate.page} limit={reduxstate.limit} countPage={reduxstate.countTodos}/>
        </div>
        <hr/>
        <div>
          <AddTodo page={reduxstate.page} limit={reduxstate.limit} sort = {reduxstate.sort}/>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
