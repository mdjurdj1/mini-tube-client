import React, {Component} from 'react'
import {Navbar, Nav, NavItem, Glyphicon} from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap';
// import { Link } from 'react-router';
import { connect } from 'react-redux'
import './styles.css'

class navbarInstance extends Component {
  render() {
    return (
    <Navbar className="nav" collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Glyphicon id='logo' glyph="play-circle"/>&nbsp;
          <a id="brand" onClick={ e => this.props.history.push("/") }>Mini-Tube</a>
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
          <NavItem id="user_nav" eventKey={1} onClick={ e => this.props.history.push("/signup") }>
              <Glyphicon id="user" glyph="user"/>&nbsp;{this.props.currentUser.email}</NavItem> :
          <NavItem eventKey={1} onClick={ e => this.props.history.push("/signup") }>Sign-up</NavItem>
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
