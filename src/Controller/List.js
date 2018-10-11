import React, {Component} from 'react'
import LoadingHOC from './LoadingHOC'
import ControlledPortal from '../View/ControlledPortal';

import {List, Button, Image, Icon, Container, Segment} from 'semantic-ui-react'

const UserList = (props) =>{
  const{usernames} = props
  return(
    <Container>
      <List animated divided>
          {usernames.map(user => 
              <List.Item key={user.id}>
                  <List.Content floated='right'>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </List.Content>
                  <Icon name='user' size="big" color="blue"/>
                  <List.Content>
                    <h3>{user.name}</h3>
                  </List.Content>
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