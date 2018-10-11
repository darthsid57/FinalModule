import React,{Component} from 'react';
import axios from 'axios';

export default class DeleteUser extends Component{
    state = {
        id: '',
    }

    handleChange = event => {
        this.setState({ id: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.delete(`http://localhost:8080/users/${this.state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person ID:
                        <input type="text" name="id" onChange={this.handleChange} />

                    </label>
                    <button type="submit">DeleteUser</button>
                </form>
            </div>
        )
    }
}