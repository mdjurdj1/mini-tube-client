import React, { Component, PropTypes } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Row, Glyphicon } from 'react-bootstrap'
import { login, resetErrors } from '../../redux/modules/Auth/actions';
import ErrorAlert from '../../components/Errors/error_alert_box'
import LoginForm from './LoginForm';
import './login.css'

type Props = {
  login: () => void,
}

class Login extends Component {

  componentDidMount() {
    this.props.resetErrors()
  }

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
          { this.props.errors ? <ErrorAlert /> : null }
          <LoginForm onSubmit={this.handleLogin} />

          <hr id="blue_login_hr" />

          <div className="already_reg">
            <p>Dont have an account?</p>
            <NavLink to="/signup" id="signup_link"><Glyphicon glyph="share-alt" />  Create new account </NavLink>
          </div>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return { errors: state.auth.errors }
}

export default connect(mapStateToProps, { login, resetErrors })(Login);
