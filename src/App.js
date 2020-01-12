import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import Home from 'pages/Home';
import NewLink from 'pages/NewLink';
import { loadLinkFormLocalStorage } from 'redux/action/link';

class App extends Component {

  componentDidMount() {
    const { loadLinkFormLocalStorage } = this.props;
    loadLinkFormLocalStorage()
  }

  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={withRouter(Home)} />
        <Route path="/new-link" component={withRouter(NewLink)} />
      </BrowserRouter>
    )
  }

}

const mapDispatchToProps = {
  loadLinkFormLocalStorage
};

export default connect(null, mapDispatchToProps)(App);