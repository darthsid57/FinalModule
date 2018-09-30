import React, { Component } from 'react'

const API = 'http://localhost:4001/users';

export default class UserController extends Component {
    constructor(props){
        super(props);

        this.state = { users: []};
    }

    componentDidMount() {
        fetch(API)
          .then(response => response.json())
          .then(data => this.setState({users:data}));
      }
  
      render() {
        const { users } = this.state;
    
        return (
          <div>
              {users.map(user =>
                <li key={user.user_id}>
                  {user.user_firstname} | {user.user_lastname}
                </li>
              )}
            Hello
          </div>
        );
    }
}

