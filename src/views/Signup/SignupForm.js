import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import './styles.css'

type Props = {
  submitting: boolean,
  onSubmit: () => void,
  handleSubmit: () => void,
}

const validateUsername = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Username is required';
  } else if (values.username.length < 2) {
    errors.username = 'Username must be a minimum of 2 characters';
  }

  return errors;
}

const validatePassword = values => {
  const errors = {}

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be a minimum of 8 characters';
  }

  return errors
}

const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Username is required';
  } else if (values.username.length < 2) {
    errors.email = 'Username must be a minimum of 2 characters';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be a minimum of 8 characters';
  }

  return errors;
}

class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      usernameErrors: {},
      passwordError: {}
    }
  }

  props: Props

  handleSubmit = data => this.props.onSubmit(data);

  handleChange(e) {
    if (e.target.name === "username") {
      this.setState({
        usernameErrors: validateUsername({email: e.target.value}),
        username: e.target.value
      })
    } else {
      this.setState({
        passwordErrors: validatePassword({password: e.target.value}),
        password: e.target.value
      })
    }
  }

  render() {
  const { pristine, submitting, handleSubmit } = this.props;
  return (
    <form onSubmit={handleSubmit(this.handleSubmit)}>
      <div className="field">
        <label className="label" htmlFor="username"> Email </label>
        <p className="control">
          <Field
            name="email"
            value={this.state.username}
            onChange={e=>this.handleChange(e)}
            className="input"
            component="input"
            type="text"
            placeholder="Email address..."
          />
        </p>
        {this.state.usernameErrors !== {} ? <p className="help is-danger">{this.state.usernameErrors.username}</p> : null}
      </div>

      <div className="field">
        <label className="label" htmlFor="password">Password</label>
        <p className="control">
          <Field
            name="password"
            value={this.state.password}
            onChange={e=>this.handleChange(e)}
            className="input"
            component="input"
            type="password"
            placeholder="Password"
          />
        </p>
        {this.state.passwordErrors ? <p className="help is-danger">{this.state.passwordErrors.password}</p> : null}
      </div>
      <div className="field">
        <p className="control">
          <button type="submit" className="button is-success" disabled={pristine || submitting}>{ submitting ? 'Loading...' : 'Sign Up'}</button>
        </p>
      </div>
    </form>
  )
}
}

export default reduxForm({
  form: 'signup',
  validate
})(SignupForm);
