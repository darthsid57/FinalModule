import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from 'react-modal';
import Layout from './View/Layout';
import LoginLayout from './View/LoginLayout';

import UsersController from './Controller/UsersPost';


class App extends Component {
  
  render() {  
      return (
        <div>
          <UsersController>

          </UsersController>
        </div>
      );
    }
}

export default App;
