import React, { Component } from 'react';

export default class Daftar extends Component{
	constructor(){
		super();
		this.state = {
			name: '',
			address: '',
			email: '',
			phone: ''
		}
	}
	
	render(){
		return(
			<div>
				<input type="text" value={this.state.name} onChange={ (e) => {
					this.setState({
						name: e.target.value
					})
				}}/>
				
				<input type="text" value={this.state.address} onChange={ (e) => {
					this.setState({
						address: e.target.value
					})
				}}/>
				
				<input type="text" value={this.state.email} onChange={ (e) => {
					this.setState({
						email: e.target.value
					})
				}}/>
				
				<input type="text" value={this.state.phone} onChange={ (e) => {
					this.setState({
						phone: e.target.value
					})
				}}/>
				
				<p>{`My name is ${this.state.name}, I live on ${this.state.address}`}</p>
				<p>{`Call me on: `}</p>
				<p>{`email ${this.state.email} or phone ${this.state.phone}`}</p>
			</div>
		)
	}
}