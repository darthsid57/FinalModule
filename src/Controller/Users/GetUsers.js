import React, { Component } from 'react';
import axios from 'axios';  

import SearchBar from './SearchBar';
import List from './List';
import { Grid} from 'semantic-ui-react';

import EditUsers from './EditUser'


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
                    id: data.user_id,
                    firstname: `${data.user_firstname}`, 
                    lastname: `${data.user_lastname}`,
                    pin: data.user_pin,
                    type: `${data.usertype}`,
                    company: `${data.company_name}`,
                    status: `${data.user_status}`

                }
            )))
            .then( newData => this.setState({users: newData, store: newData}))
            .catch(error => alert(error))

    }

    render() {
        const {users} = this.state
        return (
          <div>
              <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
              <Grid>
                  <Grid.Row >
                      <Grid.Column >
                        <SearchBar searchFunc={(e) => this.filterNames(e)}/>
                      </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                      <Grid.Column>
                        <List usernames={users}/>
                        <EditUsers users={users} />
                      </Grid.Column>
                  </Grid.Row>
              </Grid>
          </div>
        );
      }
}