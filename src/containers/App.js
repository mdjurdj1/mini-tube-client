import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import { connect } from 'react-redux';


import Home from '../views/Home'
import Signup from '../views/Signup'
import NotFound from '../views/NotFound'
import Playlists from '../views/Playlists'
import Dashboard from '../containers/Dashboard'

import {withRouter} from 'react-router'
import Navbar from '../components/Navbar'

import MatchAuthenticated from '../components/MatchAuthenticated/';
import RedirectUnauthenticated from '../components/RedirectUnauthenticated/';
import NestedMatchAuthenticated from '../components/NestedMatchAuthenticated/';
import Errors from '../components/Errors';
import { authenticate, authenticationFailure, logout } from '../redux/modules/Auth/actions';

type Props = {
  isAuthenticating: boolean,
  isAuthenticated: boolean,
  logout: () => void,
  authenticate: () => void,
  authenticationFailure: () => void,
  errors: [],
}

const NavigationWithRouter = withRouter(Navbar)

class App extends Component {

  props: props

  render() {
    return (
      <Router>
        <div className="App">
        <NavigationWithRouter />

          <hr />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/playlists" component={Playlists} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
