/* eslint-disable react/style-prop-object */
import React from "react";
import { Link } from 'react-router-dom';
import "../register/register.css";

const Register = () => {
  return (
    <div className="register-all">      
      <div className="register-header">
        <Link to='/login'><h4>BotãoVoltar</h4></Link>
        <h2>La Burger <br /> Queen</h2>
      </div>

      <div className="register-body">
        <h1 className="register-title">Cadastro:</h1>
        <div className="register-main">
          <input className="register-input" type="text" placeholder="Nome e Sobrenome"></input>
          <input className="register-input" type="text" placeholder="E-mail"></input>
          <input className="register-input" type="text" placeholder="Senha"></input>
          <select className="register-select">

            <option value="typeTitle">Selecione o cargo</option>
            <option value="Chefe de Cozinha">Chefe de Cozinha</option>
            <option value="Garçom/Garçonete">Garçom/Garçonete</option>
          </select>

          <button className="register-btn">CONCLUIR</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
