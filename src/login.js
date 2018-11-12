import React, { Component } from 'react';

export default class Login extends Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(`${this.state.email}` == `asd@mail.com`){
            if(`${this.state.password}` == `12345`){
                window.location = "/";
            }else{
                alert(`Email: ${this.state.email} and Password: ${this.state.password}`);
            }
        }
    }

    render(){
        return(
            <div className="container">
                <div className="login-container">
                    <div id="output"></div>
                    <div className="avatar"></div>
                    <div className="form-box">
                        <form onSubmit={this.onSubmit} role="form">
                            <input name="user" type="text" placeholder="email" value={this.state.email} onChange={ (e) => {
                                this.setState({
                                    email: e.target.value
                                })
                            }}/>
                            <input type="password" placeholder="password" value={this.state.password} onChange={ (e) => {
                                this.setState({
                                    password: e.target.value
                                })
                            }}/>
                            <button className="btn btn-info btn-block login" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}