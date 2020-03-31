import React from 'react';
import Logo from '../Logo/index';
import './style.css';
const Header = props=>{
    return(
        <div className="header">
            <Logo/>
            <a href="#" onClick={props.clearList} >Clear List</a>
        </div>
    );
}

export default Header;