import React, {Component} from 'react'
import {List, Button, Image, Icon, Container, Segment} from 'semantic-ui-react'

const CompanyList = (props) => {
    const{companies} = props
    return(
        <Container>
            <List animated divided>
            {companies.map(comp => 
              <List.Item key={comp.id}>
                  <List.Content floated='right'>
                  </List.Content>
                  <Icon name='user' size="big" color="blue"/>
                  <List.Content>
                    <h3>{comp.companyName}</h3>
                  </List.Content>
              </List.Item>        
                )}
            </List>
        </Container>
    )
}

export default CompanyList;