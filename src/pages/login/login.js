import React from "react";
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
        <h2>Não tem acesso?</h2>
        <h2>Cadastre-se</h2>
      </div>
    </div>
  );
};

export default Login;
