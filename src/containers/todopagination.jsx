import React from "react";
import { useDispatch } from "react-redux";
import {PageUpdateAPI} from '../action/actioncreators/pageupdate'

const TodoPagination = (props) => {
    const dispatch = useDispatch()

    let countpages = Math.ceil(props.countPage / props.limit)

    let pagbutton = []

    for(let i = 1; i <= countpages; i++){
        pagbutton.push(i)
    }    

    return (
        <div className='paginationbutton'>
            { 
              pagbutton.map(el => {
                return <div 
                          key={el} 
                          className={el === props.page ? 'active': ''} 
                          onClick={() => dispatch(PageUpdateAPI(el))}
                       >
                         {el}
                       </div>
              })
            }
        </div>
    )
  
}

export default TodoPagination