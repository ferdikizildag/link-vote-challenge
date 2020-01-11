import React, { Component } from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import Home from 'pages/Home';
import NewLink from 'pages/NewLink';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={withRouter(Home)} />
        <Route path="/new-link" exact component={withRouter(NewLink)} />
      </BrowserRouter>
    )
  }
}

export default App;
