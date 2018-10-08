import React,{ Component } from 'react'
import { Container, Menu, Input, Segment } from 'semantic-ui-react'
import UserController from '../Controller/Users'
import './Layout.css';

class Layout extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render(){
        const { activeItem } = this.state
        return(
            <Container>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>

            <div>
            <Menu pointing>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          < Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
             />
            <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
            />
            <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            </Menu.Menu>
            </Menu>

            <Segment>
                <UserController/>
            </Segment>
            </div>
        </Container>
        );
    }
}


export default Layout