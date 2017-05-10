import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap'

//import local modules
import { signup } from '../../redux/modules/Auth/actions';
import SignupForm from './SignupForm';


class Signup extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  handleSignup = data => this.props.signup({ user: data }, this.context.router);

  render() {

    return (
      <Row>
        <Col sm={4} md={4} />
        <Col sm={4} md={4} id="signup_box">
          <h1 id="signup_header">Join Mini-Tube today!</h1>
          <SignupForm onSubmit={this.handleSignup} />

          <hr />

          <p>Already have an account?</p>
          <NavLink to="/login">Login Here</NavLink>
        </Col>
      </Row>
    )
  }
}

export default connect(null, { signup })(Signup);
