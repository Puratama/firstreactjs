import React, {Component} from 'react';
import axios from 'axios';

export default class MainMenu extends Component{
    componentWillMount(){
        if(localStorage.getItem('userInfo') === null){
            window.location.replace('/login');
            return;
        }
    }

    logout = () => {
        localStorage.removeItem('userInfo');
        window.location.replace('/');
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/list">Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{'Hi, ' + JSON.parse(localStorage.getItem('userInfo')).name}</a>
                        </li>
                        {
                            localStorage.getItem('userInfo') === null ?
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>

                            :

                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={this.logout}>Logout</a>
                            </li>
                        }
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}