import React from "react";
import './Home.css';

function Home() {
  
  return(
  <div>
    <header className="header">
      <h1 id="firstitemheader">Cupido Online</h1>
      <h1>Mensagens</h1>
      <h1>Login</h1>
    </header>
    <main>
      <form>
      <p>Aqui você pode enviar uma mensagem anônima para aquele crush que você está de   
      <img alt="eyesemoji"src="http://cdn.shopify.com/s/files/1/1061/1924/products/Eyes_Emoji_grande.png?v=1571606063"></img>
      </p>
      <label>Nome: </label>  
      <input placeholder="Digite seu nome"></input>
      <label type="email">E-mail: </label>  
      <input placeholder="Digite seu e-mail"></input>
      <label>Mensagem: </label>  
      <textarea id="mensagem" placeholder="Digite a mensagem para o seu crush"></textarea>
      <button>Enviar</button>
      </form>
       <img alt="cupid"src="https://i.pinimg.com/originals/dd/10/eb/dd10eb337856d14a8640828f99dd7a2f.gif"></img>
    </main>
  </div>  
  
  )
}

export default Home