import React, {Component} from 'react'
import LoadingHOC from './LoadingHOC'
import ControlledPortal from '../../View/ControlledPortal';

import {List, Button, Grid, Icon, Container, Item, GridColumn} from 'semantic-ui-react'

const UserList = (props) =>{
  const{usernames} = props
  return(
    <Container>
      <List animated divided>
          {usernames.map(user => 
              <List.Item key={user.id}>
                  <List.Content floated='right'>
                  </List.Content>
                  <Icon name='user' size="big" color="blue"/>
                  <Item.Group>
                    <Item.Header> {user.firstname} {user.lastname}</Item.Header>
                    <Item.Description>
                      <Grid columns={5} divideds>
                        <Grid.Column>
                          <Grid.Row>Login Pin: </Grid.Row>
                          <Grid.Row>Category: </Grid.Row>
                          <Grid.Row>Company: </Grid.Row>
                          <Grid.Row>Status: </Grid.Row>
                        </Grid.Column>

                        <Grid.Column>
                          <Grid.Row>{user.pin}</Grid.Row>
                          <Grid.Row>{user.type}</Grid.Row>
                          <Grid.Row>{user.company}</Grid.Row>
                          <Grid.Row>{user.status}</Grid.Row>
                        </Grid.Column>
                      </Grid>
                    </Item.Description>
                  </Item.Group>
              </List.Item>        
          )}
      </List>
    </Container>
  )
}
 
export default LoadingHOC(UserList)


{/* <ul>
{usernames.map(user => <li key={user.id}>{user.name}</li>)}
</ul> */}