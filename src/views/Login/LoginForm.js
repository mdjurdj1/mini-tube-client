import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import FormInput from '../../components/FormInput';

type Props = {
  submitting: boolean,
  onSubmit: () => void,
  handleSubmit: () => void,
}

class LoginForm extends Component {

  props: Props

  handleSubmit = data => this.props.onSubmit(data);

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <div className="login_form">
        <Form onSubmit={handleSubmit(this.handleSubmit)}>
          <Form.Field>
            <Field
              name="username"
              label="Username"
              type="text"
              placeholder="Username"
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
            disabled={submitting}
          >
            {submitting ? 'LOGGING IN...' : 'LOG IN'}
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
  form: 'login',
  validate
})(LoginForm);
