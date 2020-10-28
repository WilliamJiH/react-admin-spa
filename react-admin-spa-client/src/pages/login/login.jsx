import React, { Component } from 'react';
import './login.less';
import logo from './images/logo.png';


export default class Login extends Component {

    render() {
        return (
            <div className="login">
                <header className="login-header">
                  <img src={logo} alt=""/>
                  <h1>React Admin CMS</h1>
                </header>
                <section className="login-content">
                    <h2>Login</h2>
                    <div>
                        Form
                    </div>
                </section>
            </div>
        )
    }
}