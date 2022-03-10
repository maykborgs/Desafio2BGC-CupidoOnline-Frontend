import React from "react";
import Header from "../components/Header"
import './Signup.css';

const Signup = () => {
  
  return(
  <div>
    <Header/>
      <form id="signupform">
      <label>E-mail: </label>  
      <input className="inputsignup" type="email" placeholder="Digite seu e-mail"></input>
      <label>Senha: </label>  
      <input className="inputsignup" type="password" placeholder="Digite sua senha"></input>
      <label>Confirme sua Senha: </label>  
      <input className="inputsignup" type="password" placeholder="Confirme sua senha"></input>
      <button id="signupbutton" type="submit">Cadastrar</button>
      </form>
  </div>  
  
  )
}

export default Signup