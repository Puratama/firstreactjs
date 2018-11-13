import React, {Component} from 'react';
import axios from 'axios';

export default class ListCourses extends Component{
    constructor(){
        super();
        this.state = {
            list_courses: [],
            isLoading: true
        }
    }

    componentWillMount(){
        const config = {
            headers: {
                'content-type' : 'application/json',
                'Authorization' : '293ir039r9ife992i39f9i2093i1'
            }
        }

        axios.get('https://api.ingenio.co.id/api/course/all', config).then(resp => {
            console.log(resp.data.data.courses);
            this.setState({
                list_courses: resp.data.data.courses,
                isLoading: false
            })
        }).catch(error => {
            console.log(error);
        })
    }

    render(){
        if(this.state.isLoading){
            return null
        }
        return(
            <div className="container">
                <div className="card-columns" style={{columnCount: "4"}}>
                    {
                        this.state.list_courses.map((course, index) => {
                            return(
                                    <div key={index} className="card">
                                        <img className="card-img-top" src={course.image} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{course.title}</h5>
                                            <p className="card-text">{course.description}</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}