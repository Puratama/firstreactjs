import React, {Component} from 'react';
import axios from 'axios';
import CardLists from './cardList';

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
            // console.log(resp.data.data.courses);
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
                <div className="card-columns">
                    {
                        this.state.list_courses.map((course, index) => {
                            return (
                                <CardLists key={index} {...course} nomer={index+1} />
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}