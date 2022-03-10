import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';
import { API } from 'aws-amplify';

import Header from "../components/Header"

import './Home.css';

const Home = () => {
  
  const [values, setValues] = useState({
        name: '',
        email: '',
        message: '',
    });

    async function sendMail(body) {
        try {
            await API.post("cupidoonline", "/send", {body});
            alert("Email enviado para seu/sua crush <3")
            //openConfirmModal();
        } catch (e) {
            console.error(e);
           alert.error("Falha ao enviar o e-mail!");
        }
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    async function handleSubmit(event) {
        event.preventDefault();

        if (!name || !email || !message) {
            alert("Preencha todos os campos!");
        } else {

            const body = {
                name: name,
                email: email,
                message: message
            };

            try {
                await sendMail(body);
            } catch (e) {
                console.error(e);
            }
        }
    }

    const { name, email, message } = values;

  return(
  <div>
    <Header/>
    <main>
      <form onSubmit={handleSubmit} id="homeform">
      <h1>Olá, bem vindo ao Cupido Online !</h1>
      <p>Aqui você pode enviar uma mensagem anônima para aquele crush que você está de 👀 sem que ele saiba que é você, ao menos que você queira...</p>
      <label>Nome: </label>  
      <input onChange={handleChange('name')} className="inputhome" placeholder="Digite o nome da/do crush"></input>
      <label type="email">E-mail: </label>  
      <input onChange={handleChange('email')} className="inputhome" placeholder="Digite o e-mail da/do crush"></input>
      <label>Mensagem: </label>  
      <textarea onChange={handleChange('message')} id="mensagem" placeholder="Digite a mensagem para sua/seu crush"></textarea>
      <button type="submit" id="homebutton">Enviar</button>
      </form>
       <img alt="cupid"src="https://i.pinimg.com/originals/dd/10/eb/dd10eb337856d14a8640828f99dd7a2f.gif"></img>
    </main>
  </div>  
  
  )
}

export default Home