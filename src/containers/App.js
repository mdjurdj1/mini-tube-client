import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { connect } from 'react-redux';

import Home from '../views/Home'
import Signup from '../views/Signup'
import Login from '../views/Login'
import NotFound from '../views/NotFound'
import Search from '../views/Search'
import Playlist from '../views/Playlist'
import Playlists from '../views/Playlists'
import Dashboard from '../containers/Dashboard'
import Background from '../../public/background.jpg'

import Alert from 'react-s-alert';
import {withRouter} from 'react-router'
import Navbar from '../components/Navbar'
import Errors from '../components/Errors';
import MatchAuthenticated from '../components/MatchAuthenticated/';
import RedirectUnauthenticated from '../components/RedirectUnauthenticated/';
// import NestedMatchAuthenticated from '../components/NestedMatchAuthenticated/';
import { authenticate, authenticationFailure, logout } from '../redux/modules/Auth/actions';
import { getPlaylists } from '../redux/modules/Playlists/actions'
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css'

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

  props: Props

  componentDidMount() {
   const token: string = localStorage.getItem('token');
   if (token) {
     console.log('Fetching a new token!');
     this.props.authenticate();
     this.props.getPlaylists()
   } else {
     this.props.authenticationFailure();
   }
 }

 componentWillMount() {
  //  document.body.style.backgroundColor = `#E3EEFD`
    document.body.style.backgroundImage = `url(${Background})`;
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundAttachment = "fixed"
  }

  render() {
    const { isAuthenticated, isAuthenticating, currentUser, logout, errors } = this.props;
    const authProps = { isAuthenticated, isAuthenticating, currentUser };

    return (
      <Router>
        <div className="App">
          <NavigationWithRouter isAuthenticated={isAuthenticated} logout={logout} />
            <Switch>
              <Route exact path="/" component={Home} />
              <MatchAuthenticated exact path="/playlists" component={Playlists} {...authProps} />
              <MatchAuthenticated exact path="/playlists/:id" component={Playlist} {...authProps} />
              <MatchAuthenticated exact path="/dashboard" component={Dashboard} {...authProps}/>
              <MatchAuthenticated exact path="/search" component={Search} {...authProps} />
              <RedirectUnauthenticated path="/login" exact component={Login} {...authProps} />
              <RedirectUnauthenticated path="/signup" exact component={Signup} {...authProps} />
              <Route component={NotFound} />
            </Switch>
          <Alert stack={{limit: 3}} timeout={5000} />
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({
    isAuthenticating: state.auth.isAuthenticating,
    isAuthenticated: state.auth.isAuthenticated,
    currentUser: state.auth.currentUser,
    errors: state.auth.errors
  }), { logout, authenticate, authenticationFailure, getPlaylists }
)(App);
