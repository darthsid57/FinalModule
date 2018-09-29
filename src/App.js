import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from 'react-modal';

const API = 'http://localhost:4001/users';


class App extends Component {
  
    constructor(props) {
      super(props);
  
      this.state = { users: [] };
    }

    componentDidMount() {
      fetch(API)
        .then(response => response.json())
        .then(data => this.setState({users:data}));
    }

    render() {
      const { users } = this.state;
  
      return (
        <div>
          Hello
            {users.map(user =>
              <li key={user.user_id}>
                {user.user_firstname} | {user.user_lastname}
              </li>
            )}
        </div>

      );
    }

  
  
  
  
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h1 className="App-title">Welcome to React</h1>
  //       </header>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }
}

export default App;
