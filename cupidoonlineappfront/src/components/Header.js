import React from "react";
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  
  return(
    <header className="header">
      <div>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <h1 id="firstitemheader">Cupido Online</h1>
      </Link>
      <img alt="hearticon" src={require("../static/hearticon.png")}/>
      </div>
    </header>
  )
}

export default Header