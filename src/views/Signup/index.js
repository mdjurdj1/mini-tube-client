import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {Row, Col, Glyphicon} from 'react-bootstrap'

//import local modules
import ErrorAlert from '../../components/Errors/error_alert_box'
import { signup, resetErrors } from '../../redux/modules/Auth/actions';
import SignupForm from './SignupForm';
import './signup.css'

class Signup extends Component {

  componentDidMount() {
    this.props.resetErrors()
  }

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
          { this.props.errors ? <ErrorAlert /> : null }
          <SignupForm onSubmit={this.handleSignup} />

          <hr id="blue_signup_hr" />

          <div className="already_reg">
            <p>Already have an account?</p>
            <NavLink to="/login"><Glyphicon glyph="user"/>&nbsp;&nbsp;Login Here</NavLink>
          </div>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state){
  return { errors: state.auth.errors }
}
export default connect(mapStateToProps, { signup, resetErrors })(Signup);
