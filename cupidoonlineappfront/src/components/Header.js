import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  
  return(
    <header className="header">
      <div>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <h1 id="firstitemheader">Cupido Online</h1>
      </Link>
      <img alt="hearticon" src={require("../static/hearticon.png")}/>
      </div>
      <div>
      <Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>
        <h1>Cadastre-se</h1>
      </Link>
      <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
        <h1>Login</h1>
      </Link>
      </div>
    </header>
  )
}

export default Header