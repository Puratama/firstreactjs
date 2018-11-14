import React, {Component} from 'react';
import axios from 'axios';

export default class CardLists extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
                <div className="card">
                    <img className="card-img-top" src={this.props.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <p className="card-text">{this.props.price === 0 ? 'Gratis' : this.props.price}</p>
                        <p className="card-text">{this.props.nomer}</p>
                        <a href={"/detail?slug=" + this.props.slug} className="btn btn-primary">Detail</a>
                    </div>
                </div>
        );
    }
}