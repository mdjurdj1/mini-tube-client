import React, {Component} from 'react'
import {Navbar, Nav, NavItem, Glyphicon, NavDropdown} from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './navbar.css'

type Props = {
  isAuthenticated: boolean,
  logout: () => void,
}

class navbarInstance extends Component {

  static contextTypes = {
    router: PropTypes.object,
  }

  props: Props

  handleLogout() {
    this.props.logout(this.context.router);
  }

  render() {
    const currentEmail =
    <span><Glyphicon id="user" glyph="user"/>&nbsp;{this.props.currentUser.email}</span>

    return (
    <Navbar className="nav" collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Glyphicon id='logo' glyph="play-circle"/>&nbsp;
          {this.props.isAuthenticated ?
            <a id="brand" onClick={ e => this.props.history.push("/dashboard") }>Mini-Tube</a> :
            <a id="brand" onClick={ e => this.props.history.push("/") }>Mini-Tube</a>
          }
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} onClick={ e => this.props.history.push("/playlists") }>My Playlists</NavItem>
          <NavItem eventKey={2} onClick={ e => this.props.history.push("/search") }>Search Videos</NavItem>
        </Nav>
        <Nav pullRight>
        { this.props.currentUser.email ?
          <NavDropdown eventKey={3} title={currentEmail} id="basic-nav-dropdown">
            <NavItem eventKey={1} onClick={ e => this.handleLogout(e) }>
              <Glyphicon glyph="log-out"/>&nbsp;Logout</NavItem>
          </NavDropdown> :
          <NavItem eventKey={1} onClick={ e => this.props.history.push("/login") }>Have an account? Log in!</NavItem>
          // <NavItem eventKey={2} onClick={ e => this.props.history.push("/login") }>Login</NavItem>
        }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default connect(
  state => ({
    currentUser: state.auth.currentUser
  })
)(navbarInstance);
