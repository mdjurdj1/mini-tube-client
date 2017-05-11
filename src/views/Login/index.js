import React, { Component, PropTypes } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Row, Glyphicon } from 'react-bootstrap'
import { login } from '../../redux/modules/Auth/actions';
import ErrorAlert from './error_alert'
import LoginForm from './LoginForm';

type Props = {
  login: () => void,
}

class Login extends Component {

  static contextTypes = {
    router: PropTypes.object,
  }

  props: Props

  handleLogin = data => this.props.login({ user: data }, this.context.router);

  render() {
    return (
      <Row>
        <Col sm={4} md={4} />
        <Col sm={4} md={4} id="login_box">
          <h1 id="login_header">Log in to Mini-Tube</h1>
          { this.props.errors ? <ErrorAlert errors={this.props.errors.email} /> : null }
          <LoginForm onSubmit={this.handleLogin} />

          <hr />

          <p>Dont have an account?</p>
          <NavLink to="/signup" id="signup_link"><Glyphicon glyph="share-alt" />  Create new account </NavLink>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return { errors: state.auth.errors }
}

export default connect(mapStateToProps, { login })(Login);
