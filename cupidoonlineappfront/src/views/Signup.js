import React from "react";
import Header from "../components/Header"
import './Signup.css';

const Signup = () => {
  
  return(
  <div>
    <Header/>
      <form id="signupform">
      <label>Nome: </label>  
      <input placeholder="Digite seu nome"></input>
      <label>E-mail: </label>  
      <input type="email" placeholder="Digite seu e-mail"></input>
      <label>Senha: </label>  
      <input type="password" placeholder="Digite sua senha"></input>
      <label>Confirme sua Senha: </label>  
      <input type="password" placeholder="Confirme sua senha"></input>
      <button id="signupbutton" type="submit">Cadastrar</button>
      </form>
  </div>  
  
  )
}

export default Signup