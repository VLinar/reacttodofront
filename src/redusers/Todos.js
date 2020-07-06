import { ADD_TODO_TO_STATE,
         UPDATE_CHECKED_TODO_IN_STATE, 
         DELETE_TODO_IN_STATE, 
         UPDATE_TODO_TITLE_IN_STATE, 
         FIRST_TODO_IN_STATE, 
         PAGE_UPDATE_IN_STATE
       } from "../action/actiontype";

const initialstate = {
  todos: [],
  page: 1,
  limit: 2,
  countTodos: 0,
  sort: 'DESC'
}

function Todos(state = initialstate, action) {
  switch (action.type) {
    case FIRST_TODO_IN_STATE:
      return {
        ...state,
        todos: action.payload.todos,
        page: action.payload.page,
        countTodos: action.payload.countTodos
      }
    case ADD_TODO_TO_STATE:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
      
    case UPDATE_CHECKED_TODO_IN_STATE:
      return {
        ...state,
        todos: [
          ...state.todos.map(e => {
              if (e.id === action.payload){
                  e.checked = !e.checked
              }
              return e
          })
        ]
      }

    case DELETE_TODO_IN_STATE:
      return {
        ...state,
        todos: [ ...state.todos.filter(e => e.id !== action.payload)]
      }
      
    case UPDATE_TODO_TITLE_IN_STATE:
      return  {
        ...state,
        todos: [...state.todos.map(e => {
          if (e.id === action.payload.id){
              e.title = action.payload.title
          }
          return e
        })]
      }

    case PAGE_UPDATE_IN_STATE:
      return {
        ...state,
        page: action.payload
      }

    default:
      return state;
  }

 
}

export default Todos;
