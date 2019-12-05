import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import './assets/css/general/box.css';
import './assets/css/general/container.css';
import './assets/css/general/text.css';
import NavbarPage from './pages/NavbarPage';
import NotFoundPage from './pages/error/NotFoundPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact path="/" 
            render={ (props) => (<NavbarPage {...props} cookies={this.props.cookies}/>) } 
          />
          <Route
            exact path="/favourites" 
            render={ (props) => (<NavbarPage {...props} cookies={this.props.cookies}/>) } 
          />
          <Route path="*" component={ NotFoundPage } />
        </Switch>
      </div>
    );
  }
}

export default App;
