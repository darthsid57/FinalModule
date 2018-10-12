import React, { Component } from 'react';
import axios from 'axios';  

import SearchBar from './SearchBar';
import List from './List';
import { Grid} from 'semantic-ui-react';


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
                      </Grid.Column>
                  </Grid.Row>
              </Grid>
          </div>
        );
      }
}