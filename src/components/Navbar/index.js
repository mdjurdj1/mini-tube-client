import React, {Component} from 'react'
import {Navbar, Nav, NavItem, Glyphicon} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';

export default class navbarInstance extends Component {
  render() {
    return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Glyphicon id='logo' glyph="play-circle"/>&nbsp;<a href="#">Mini-Tube</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} onClick={ e => this.props.history.push("/playlists") }>My Playlists</NavItem>
          <NavItem eventKey={2} onClick={ e => this.props.history.push("/search") }>Search Videos</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Log-in</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}
