import React, {Component} from 'react';
import axios from 'axios';
import {Form} from 'semantic-ui-react'

export default class UserPost extends Component{
    state = {
        firstname: '',
        lastname:'',
        pin: '',
        type: '',
        company: ''
    }

    handleChange = (e, { name, value}) => this.setState({[name]: value})

    // handleChange = event => {
    //     this.setState({ name: event.target.value });
    // }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            user_firstname: this.state.firstname,
            user_lastname: this.state.lastname,
            user_pin: this.state.pin,
            usertype: this.state.type,
            user_company: this.state.company
        };

        const user_firstname = user.user_firstname.toString();
        const user_lastname = user.user_lastname.toString();
        const user_pin = user.user_pin.toString();
        const usertype = user.usertype.toString();
        const user_company = user.user_company.toString();

        axios.post(`http://localhost:8080/users`, {user_firstname,user_lastname, user_pin, usertype, user_company} )
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log(user_firstname);
                console.log(user_lastname);
                console.log(user_pin);
                console.log(usertype);
                console.log(user_company);
            })
    }

    render(){
        const {firstname, lastname, pin, type, company} = this.state
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Input placeholder='First name' name='firstname' value={firstname} onChange={this.handleChange} />
                    <Form.Input placeholder='Last Name' name='lastname' value={lastname} onChange={this.handleChange}/>
                    <Form.Input placeholder='Pin' name='pin' value={pin} onChange={this.handleChange}/>
                    <Form.Input placeholder='Type' name='type' value={type} onChange={this.handleChange}/>
                    <Form.Input placeholder='Company' name='company' value={company} onChange={this.handleChange}/>
                    <Form.Button content='Submit'/> 
                </Form.Group>
            </Form>
        )
    }
}

{/* <div>
<form onSubmit={this.handleSubmit}>
    <label>
        Person Name:
        <input type="text" name="firstname" onChange={this.handleChange} />
        <input type="text" name="lastname" onChange={this.handleChange} />
        <button type="submit">Add</button>
    </label>
</form>
</div> */}