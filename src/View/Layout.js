import React,{ Component } from 'react'
import { Container, Divider, Grid, Header, Icon } from 'semantic-ui-react'
import UserController from '../Controller/User.controller'
import './Layout.css';

class Layout extends Component {
    render(){
        return(
            <Container>
            <div className="Layout">
                <UserController/>
            </div>
        </Container>
        );
    }
}


export default Layout