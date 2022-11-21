import React from "react";
import { Link } from 'react-router-dom';
import "../login/login.css";

const Login = () => {
  return (
    <div className="login-all">
      <div className="login-header">
        La <br /> Burger <br /> Queen
      </div>
      <div className="login-body">
        <input className="login-input" type="text" placeholder="E-mail"></input>
        <input className="login-input" type="text" placeholder="Senha"></input>
        <button className="login-btn">LOGIN</button>
      </div>
      <div className="login-register">
        <h3>Não tem acesso? <Link to='/register' className="login-register-link">Cadastre-se</Link></h3>
      </div>
    </div>
  );
};

export default Login;
