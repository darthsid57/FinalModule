import React, { Component } from 'react'

export default class Home extends Component{
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({activeItem: name})

    Item = (props) => {
        return (
            <Segment>
                {props.children}
            </Segment>
        )
    }

    render(){
        return(
            <div>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
                <Container>
                    <Menu>
                        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                    </Menu>
                </Container>
            </div>
        )
    }
}