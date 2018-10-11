import React from 'react'
import { Button, Card, Image, Container, List, Icon } from 'semantic-ui-react'

const CardExampleGroups = (props) => 
{
  const {vessels} = props

  return(
    <Container>
      <List animated divided>
          {vessels.map(vessel => 
              <List.Item key={vessel.id}>
                  <List.Content floated='right'>
                  </List.Content>
                  <Icon name='user' size="big" color="blue"/>
                  <List.Content>
                    {vessel.name}<br/>
                    {vessel.flag}<br/>
                    {vessel.company}
                  </List.Content>
              </List.Item>        
          )}
      </List>
    </Container>
  )
}

export default CardExampleGroups
