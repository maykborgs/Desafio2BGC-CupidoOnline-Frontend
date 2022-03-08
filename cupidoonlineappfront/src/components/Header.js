import React from "react";
import './Header.css';

const Header = () => {
  
  return(
    <header className="header">
      <div>
      <h1 id="firstitemheader">Cupido Online</h1>
      <img alt="hearticon" src={require("../static/hearticon.png")}/>
      </div>
      <div>
      <h1>Cadastre-se</h1>
      <h1>Login</h1>  
      </div>
    </header>
  )
}

export default Header