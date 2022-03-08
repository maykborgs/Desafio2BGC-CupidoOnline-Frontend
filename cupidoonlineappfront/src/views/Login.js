import React from "react";
import Header from "../components/Header"
import './Login.css';

const Login = () => {
  
  return(
  <div>
    <Header/>
      <form>
      <label>E-mail: </label>  
      <input type="email" placeholder="Digite seu e-mail"></input>
      <label>Senha: </label>  
      <input type="password" placeholder="Digite sua senha"></input> 
      <button>Login</button>
      </form>
  </div>  
  
  )
}

export default Login