import React, {Component} from 'react';
import axios from 'axios';

export default class UserPost extends Component{
    state = {
        name: '',
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            user_name: this.state.name
        };

        const user_firstname = user.user_name.toString();

        axios.post(`http://localhost:8080/users`,  {user_firstname} )
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log(user_firstname);
            })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:
                        <input type="text" name="name" onChange={this.handleChange} />
                        <button type="submit">Add</button>
                    </label>
                </form>
            </div>
        )
    }
}