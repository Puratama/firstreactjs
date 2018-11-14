import React, { Component } from 'react';
import Axios from 'axios';

export default class Register extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            phone: '',
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
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password
        }

        if(this.state.email === '' || this.state.password === ''){
            alert('Email dan Password tidak boleh kosong');
            return;
        }

        Axios.post('https://api.ingenio.co.id/api/user/register', body, config).then( resp => {
            if(resp.data.error > 0){
                // console.log(resp.data.message);
                this.setState({
                    errorMessage: resp.data.message
                });
                return;
            }
            window.location.replace('/');
        }).catch(error => {
            console.log(error);
        })
    }

    render(){
        return(
            <div className="container">
                <div className="login-container">
                    <div id="output"></div>
                    <div className="avatar"></div>
                    <div className="form-box">
                        <form onSubmit={this.onSubmit} role="form">
                            <input name="user" type="text" placeholder="Name" value={this.state.name} onChange={ (e) => {
                                this.setState({
                                    name: e.target.value
                                })
                            }}/>
                            <input name="email" type="text" placeholder="Email" value={this.state.email} onChange={ (e) => {
                                this.setState({
                                    email: e.target.value
                                })
                            }}/>
                            <input name="phone" type="text" placeholder="Phone" value={this.state.phone} onChange={ (e) => {
                                this.setState({
                                    phone: e.target.value
                                })
                            }}/>
                            <input type="password" placeholder="Password" value={this.state.password} onChange={ (e) => {
                                this.setState({
                                    password: e.target.value
                                })
                            }}/>
                            <button className="btn btn-info btn-block login" type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}