import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';


const Menu=()=>{
  return (
      <div style={{position:"sticky",top:0}}>
            <ul className="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="Contact">Contact</Link></li>
                <li><Link to="About">About</Link></li>
            </ul>
      </div>
    )
}

export default Menu;
