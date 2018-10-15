import React, {Component} from 'react';
import axios from 'axios';
import {Form, Container} from 'semantic-ui-react';


const EditUser = (props) => {
    this.state = {
        firstname: '',
        lastname:'',
        pin: '',
        type: '',
        company: '',
        status: '',
    }

    this.handleChange = (e, { name, value}) => this.setState({[name]: value})

    this.handleSubmit = event => {

        const user = {
            user_firstname: this.state.firstname,
            user_lastname: this.state.lastname,
            user_pin: this.state.pin,
            usertype: this.state.type,
            user_company: this.state.company,
            user_status: this.state.status
        };

        const user_firstname = user.user_firstname.toString();
        const user_lastname = user.user_lastname.toString();
        const user_pin = user.user_pin.toString();
        const usertype = user.usertype.toString();
        const user_company = user.user_company.toString();
        const user_status = user.user_status.toString();

        axios.put(`http://localhost:8080/users`, {user_firstname,user_lastname, user_pin, usertype, user_company, user_status} )
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log(user_firstname);
                console.log(user_lastname);
                console.log(user_pin);
                console.log(usertype);
                console.log(user_company);
                console.log(user_status);
            })
    }
    
    const{users} = props
    const {firstname, lastname, pin, type, company, companies} = this.state
    return (
        <Container>
            <Form onSubmit={this.handleSubmit}>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
                {users.map(user =>
                    <Form.Group widths='equal' key={user.id}>
                    <Form.Input name='firstname' value={firstname} onChange={this.handleChange} />
                    <Form.Input name='lastname' value={lastname} onChange={this.handleChange}/>
                    <Form.Input name='pin' value={pin} onChange={this.handleChange}/>
                    <Form.Input name='type' value={type} onChange={this.handleChange}/>
                    
                    
                    <Form.Radio label='Active' type="radio" value="active" name="status" onChange={this.handleChange}/>
                    <Form.Radio label='Inactive' type="radio" value="inactive" name="status" onChange={this.handleChange}/>
                    <Form.Button content='Submit'/> 
                    </Form.Group>
                )}
            </Form>
        </Container>
    )
    
}

export default EditUser;