import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';

export default class DetailCourses extends Component {
    constructor(){
        super();
        this.state = {
            course: [],
            total_course: ''
        }
    }

    componentDidMount(){
        const slug = queryString.parse(this.props.location.search).slug;
        const config = {
            headers : {
                'content-type' : 'application/json',
                'Authorization' : '293ir039r9ife992i39f9i2093i1'
            }
        }
        axios.get('https://api.ingenio.co.id/api/course/detail/' + slug, config).then(resp => {
            console.log(resp.data);
            this.setState({
                course: resp.data.data.course,
                total_course: resp.data.data.total_courses
            })
        }).catch(error => {
            console.log(error);
        })
    }

    render(){
        return(
            <div className="card">
                <img className="card-img-top" src={'https://assets.ingenio.co.id'+this.state.course.image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{this.state.course.title}</h5>
                    <p className="card-text">{this.state.course.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }
}