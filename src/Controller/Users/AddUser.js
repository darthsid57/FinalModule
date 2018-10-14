import React, {Component} from 'react';
import axios from 'axios';
import {Form, Container, Message} from 'semantic-ui-react'

export default class AddUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            companies: []
        };
    }
    
    state = {
        firstname: '',
        lastname:'',
        pin: '',
        type: '',
        company: '',
        status: '',
    }

    componentDidMount(){
        axios.get('http://localhost:8080/company')
            .then(json => json.data.data.map(data => (
                {
                    key: `${data.id}`,
                    value: `${data.id}`,
                    text: `${data.company_name}`
                }
            )))
            .then( newData => this.setState({companies: newData}))
            .catch(error => alert(error))
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
            user_company: this.state.company,
            user_status: this.state.status
        };

        const user_firstname = user.user_firstname.toString();
        const user_lastname = user.user_lastname.toString();
        const user_pin = user.user_pin.toString();
        const usertype = user.usertype.toString();
        const user_company = user.user_company.toString();
        const user_status = user.user_status.toString();

        axios.post(`http://localhost:8080/users`, {user_firstname,user_lastname, user_pin, usertype, user_company, user_status} )
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

    render(){
        const {firstname, lastname, pin, type, company, companies} = this.state
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
                    <Form.Group widths='equal'>
                        <Form.Input placeholder='First name' name='firstname' value={firstname} onChange={this.handleChange} />
                        <Form.Input placeholder='Last Name' name='lastname' value={lastname} onChange={this.handleChange}/>
                        <Form.Input placeholder='Pin' name='pin' value={pin} onChange={this.handleChange}/>
                        <Form.Input placeholder='Type' name='type' value={type} onChange={this.handleChange}/>
                        
                        <Form.Select placeholder='Company' name='company' value={company} options={companies} onChange={this.handleChange}/>
                        
                        <Form.Radio label='Active' type="radio" value="active" name="status" onChange={this.handleChange}/>
                        <Form.Radio label='Inactive' type="radio" value="inactive" name="status" onChange={this.handleChange}/>
                        <Message success header='Form Completed' content="You're all signed up for the newsletter" />
                        <Form.Button content='Submit'/> 

                    </Form.Group>
                </Form>
            </Container>
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