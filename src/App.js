import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from 'react-modal';
import Layout from './View/Layout';
import factory from './ethereum/factory'

const API = 'http://localhost:4001/users';


class App extends Component {
  static async getInitialProps(){
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return {campaigns};
  }
  
  render() {  
      return (
        <div>
          <div>{this.props.campaigns[0]}</div>
          <Layout>
            <div className="App">
              <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
              </header>
              <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
              </p>
            </div>
          </Layout>
        </div>
      );
    }
}

export default App;
