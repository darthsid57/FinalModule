import React, { Component } from 'react';
import axios from 'axios';  

import SearchBar from './SearchBar';
import List from './List';

export default class UserList extends Component{

    constructor(props){
        super(props);
        this.state = {
            users: [],
            store: []
        };
    }

    filterNames(e){
        this.setState({users: this.state.store.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))})    
    }

    componentDidMount(){
        axios.get('http://localhost:8080/users')
            .then(json => json.data.data.map(data => (
                {
                    name: `${data.user_firstname} ${data.user_lastname}`,
                    id: data.user_id
                }
            )))
            .then( newData => this.setState({users: newData, store: newData}))
            .catch(error => alert(error))

    }

    render() {
        const {users} = this.state
        return (
          <div className="Card">
            <div className="header">NAME LIST</div>
            <SearchBar searchFunc={(e) => this.filterNames(e)}/>
            <List usernames={users}/>
          </div>
        );
      }
}