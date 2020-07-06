import React from "react";
import TodoList from "./components/todolist";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import { rootReducer } from "./redusers";
import thunk from 'redux-thunk';
import './App.css';


const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <TodoList />
        </header>
      </div>
    </Provider>
  );
}