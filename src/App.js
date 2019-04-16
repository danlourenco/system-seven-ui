import React, { Component } from 'react';
import MenuBar from './components/menubar';
import Desktop from './components/desktop';
import Dialog from './components/dialog';

import './App.css';

class App extends Component {
  state = {
    showWelcome: true
  };

  handleOK = () => {
    this.setState({ showWelcome: false })
  }
  render() {
    return (
      <div className="App">
        <MenuBar />
        <Desktop>
          { this.state.showWelcome && (
            <Dialog
            content={ 'A modern new experience coming soon.'}
            isOpen={ this.state.showWelcome }
            onConfirm={ this.handleOK } />
          )}

        </Desktop>
      </div>
    );
  }
}

export default App;
