import React from 'react';
import './style.css';

const Addtodo = props=>{
    return(
        <div>
            <form onSubmit={props.addTodo}>
                <input className="InputTodo" type="text" value={props.task} onChange={props.onChangeHandler}/>
            </form>
        </div>
    );
}

export default Addtodo;