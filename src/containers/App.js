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

class App extends Component {

  props: props

  render() {
    return (
      <Router>
        <div className="App">
        <nav className="uk-navbar-container navbar uk-navbar">
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li className="uk-active"><a href="/">Mini-tube</a></li>
              <li className="uk-parent"><a href="/signup">Signup</a></li>
              <li className="uk-parent"><a href="/playlists">Playlists</a></li>
            </ul>
          </div>
        </nav>

          <hr />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/playlists" component={Playlists} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
