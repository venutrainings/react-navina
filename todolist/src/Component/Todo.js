// import { act } from '@testing-library/react'
import React from 'react';
import { useReducer,useRef } from 'react';

function Todo() {

    const inputRef=useRef()
    const item={type:"add", name:""}
    const [items,dispatch]=useReducer((state,action)=>{
        switch(action.type){
            case "add":
                return [
                    ...state,
                    {
                        id:state.length+1,
                        name:action.name
                    }
                ];
            case "delete":
                return state.filter((_,index)=>index!==action.index)
            default:
                return state
            
        }
    },[item])

    function addName(event){
        event.preventDefault();
        dispatch(
            {
            type:"add",
            name:inputRef.current.value
        }
        );
    }


  return (
    <div>
        <input ref={inputRef}/>
        <button onClick={addName}>ADD</button>
        <ul>
            {items.map((item,index) =>
             <li key = {item.id}>
                 {item.name}
                 <button onClick={() => dispatch(
                                {
                                type:"delete",
                                index
                            }
                        )}>
                     Remove
                 </button>
             </li>   
            )}
        </ul>
    </div>
  )
}

export default Todo