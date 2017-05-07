import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import FormInput from '../../components/FormInput';

class SignupForm extends Component {

  handleSubmit = data => this.props.onSubmit(data);

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <div className="signup_form">
        <Form onSubmit={handleSubmit(this.handleSubmit)}>
          <Form.Field>
            <Field
              name="email"
              label="Email"
              type="email"
              placeholder="Email"
              component={FormInput} />
          </Form.Field>
          <Form.Field>
            <Field
              name="password"
              label="Password"
              type="password"
              placeholder="Password"
              component={FormInput} />
          </Form.Field>
          <Button
            type="submit"
            disabled={submitting} >
            {submitting ? 'CREATING ACCOUNT...' : 'CREATE ACCOUNT'}
          </Button>
        </Form>
      </div>
    )
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email must be valid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be a minimum of 8 characters';
  }

  return errors;
}

export default reduxForm({
  form: 'signup',
  validate
})(SignupForm);
