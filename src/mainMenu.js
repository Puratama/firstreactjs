import React, {Component} from 'react';
import axios from 'axios';

export default class MainMenu extends Component{
    componentWillMount(){
        if(localStorage.getItem('userInfo') === null){
            window.location.replace('/login');
            return;
        }
    }

    render(){
        return(
            <h2>Ini mainMenu</h2>
        )
    }
}