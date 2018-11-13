import React, { Component } from 'react';
import Axios from 'axios';

export default class Login extends Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            // resp: {
            //     name: 'Muhammad Rizky Pratama',
            //     email: 'rizky@mail.com',
            //     phone: '08123456789'
            // }
            userInfo: []
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            errorMessage: ''
        });

        const config = {
            headers: {
                'content-type' : 'application/json',
                'Authorization' : '293ir039r9ife992i39f9i2093i1'
            }
        }

        const body = {
            email: this.state.email,
            password: this.state.password
        }

        if(this.state.email === '' || this.state.password === ''){
            alert('Email dan Password tidak boleh kosong');
            return;
        }

        Axios.post('https://api.ingenio.co.id/api/auth', body, config).then( resp => {
            if(resp.data.error > 0){
                this.setState({
                    errorMessage: resp.data.message
                });
                return;
            }
            localStorage.setItem('userInfo', JSON.stringify(resp.data.data));
            window.location.replace('/');
        }).catch(error => {
            console.log(error);
        })
    }

    // componentDidMount(){
    //     if(localStorage.getItem('email') !== null){
    //         window.location.replace('/');
    //         return;
    //     }
    // }

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