import React, { Component } from 'react'
import { Header, Table,Icon, Grid, Button} from 'semantic-ui-react'

const API = 'http://localhost:8080/users';

class UserController extends Component {

    constructor(props){
        super(props);

        this.state = { users: []};
    }

//     <div>
//     {users.map(user => 
//       <div key={user.user_id}></div>
//     )}
// </div>

    componentDidMount() {
        fetch(API)
          .then(response => response.json())
          .then(data => this.setState({users:data}));
    }  
      render() {
        let { users } = this.state;   
        let temp = null;
        
        return (
          <div>
            <Table basic='very' celled collapsing>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>User</Table.HeaderCell>
                  <Table.HeaderCell>Details</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
              </Table.Header>
                
              <Table.Body>
                  {users.map(user =>
                    <Table.Row  key={user.user_id}>
                      <Table.Cell textAlign="center">
                        <Header icon>
                          <Icon name='user'/>
                          <Header.Content>
                            {user.user_firstname}
                            <Header.Subheader>{user.usertype}</Header.Subheader>
                          </Header.Content>
                        </Header>
                      </Table.Cell>

                      <Table.Cell>
                        <Table.Cell>
                          <Grid.Row >Full Name : </Grid.Row>
                          <Grid.Row>Profession :</Grid.Row>
                          <Grid.Row>Date of Creation :</Grid.Row>
                          <Grid.Row>Date of Update :</Grid.Row>
                          <Grid.Row>Last Login :</Grid.Row>
                          <Grid.Row>Status :</Grid.Row>
                        </Table.Cell>

                        <Table.Cell>
                          <Grid.Row>{user.user_firstname} {user.user_lastname}</Grid.Row>
                          <Grid.Row>{user.usertype} </Grid.Row>
                          <Grid.Row>{user.user_created_at}</Grid.Row>
                          <Grid.Row>{user.user_updated_at}</Grid.Row>
                          <Grid.Row>{user.user_last_login}</Grid.Row>
                          <Grid.Row>{user.user_status}</Grid.Row>
                        </Table.Cell>
                      </Table.Cell>

                      <Table.Cell>
                        <Button class='ui disable button' role='button' negative>Active</Button>
                      </Table.Cell>
                    </Table.Row>
                    )}
              </Table.Body>
            </Table>
          </div>
        );
    }
}

export default UserController;