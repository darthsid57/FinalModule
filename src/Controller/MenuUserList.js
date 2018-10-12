import React, { Component } from 'react'
import { Input, Menu, Segment, Container } from 'semantic-ui-react'
import UserController from './Users/GetUsers';
import SearchBar from './Users/SearchBar';
import VesselList from './Vessels/vessel'
import { Link } from 'react-router-dom';

export default class MenuUserList extends Component {



  render() {
    const { activeItem } = this.state

    return (
        <Container>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
                <Menu fluid pointing color="blue">
                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Link to="/Users">
                    <Menu.Item
                        name='users'
                        active={activeItem === 'users'}
                        onClick={this.handleItemClick}
                    />
                </Link>

                <Link to="/Companies">
                    <Menu.Item
                        name='company'
                        active={activeItem === 'company'}
                        onClick={this.handleItemClick}
                    />
                </Link>

                <Link to="/Vessels">
                    <Menu.Item
                        name='vessels'
                        active={activeItem === 'vessels'}
                        onClick={this.handleItemClick}
                    />
                </Link>
                <Menu.Menu position='right'>
                    <Menu.Item
                    name='logout'
                    active={activeItem === 'logout'}
                    onClick={this.handleItemClick}
                    />  
                </Menu.Menu>
                </Menu>
                <Segment>
                    <VesselList></VesselList>

                </Segment>
        </Container>
    )
  }
}