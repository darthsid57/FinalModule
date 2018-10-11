import React, { Component } from 'react';
import {Route} from 'react-router-dom';


import logo from './logo.svg';
import './App.css';
import Modal from 'react-modal';
import Layout from './View/Layout';
import LoginLayout from './View/LoginLayout';
import Users from './Controller/MenuUserList';
import ControlledPortal from './View/ControlledPortal';
import DeleteUser from './Controller/UserDelete';
import Vessels from './Controller/Vessels/vessel';



import Home from './Pages/Home';


class App extends Component {
  
  render() {  
      return (
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/Login' component={LoginLayout} />
          <Route path='/Users' component={Users} />
          <Route path='/Portal' component={ControlledPortal} />
          <Route path='/DeleteUser' component={DeleteUser} />

          <Route path='/vessels' component={Vessels} />
        </div>
      )
    }
}

export default App;
