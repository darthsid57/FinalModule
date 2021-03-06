import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import LoginLayout from './View/LoginLayout';
import ControlledPortal from './View/ControlledPortal';
import DeleteUser from './Controller/Users/DeleteUser';
import Vessels from './Controller/Vessels/vessel';

import PostUser from './Controller/Users/AddUser';

import UserList from './Controller/Users/GetUsers'

import CompanyList from './Controller/Company/GetCompany'

import Home from './Pages/Home';

import EditUser from './Controller/Users/EditUser'


class App extends Component {
  
  render() {  
      return (
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/Login' component={LoginLayout} />
          <Route path='/Portal' component={ControlledPortal} />
          <Route path='/DeleteUser' component={DeleteUser} />
          <Route path='/GetUsers' component={UserList} />
          <Route path='/vessels' component={Vessels} />
          <Route path='/AddUser' component={PostUser} />
          <Route path='/GetCompany' component={CompanyList} />
          <Route path='/EditUser' component={EditUser} />
        </div>
      )
    }
}

export default App;
