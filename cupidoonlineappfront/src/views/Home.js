import React from "react";
import Header from "../components/Header"
import './Home.css';

const Home = () => {
  
  return(
  <div>
    <Header/>
    <main>
      <form id="homeform">
      <h1>Olá, bem vindo ao Cupido Online !</h1>
      <p>Aqui você pode enviar uma mensagem anônima para aquele crush que você está de 👀 sem que ele saiba que é você, ao menos que você queira...</p>
      {/* <img alt="eyesemoji"src="http://cdn.shopify.com/s/files/1/1061/1924/products/Eyes_Emoji_grande.png?v=1571606063"></img> */}
      <label>Nome: </label>  
      <input placeholder="Digite o nome do crush"></input>
      <label type="email">E-mail: </label>  
      <input placeholder="Digite seu e-mail"></input>
      <label>Mensagem: </label>  
      <textarea id="mensagem" placeholder="Digite a mensagem para a/o sua/seu crush"></textarea>
      <button id="homebutton">Enviar</button>
      </form>
       <img alt="cupid"src="https://i.pinimg.com/originals/dd/10/eb/dd10eb337856d14a8640828f99dd7a2f.gif"></img>
    </main>
  </div>  
  
  )
}

export default Home