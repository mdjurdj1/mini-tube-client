import React from 'react';
import { Input } from 'semantic-ui-react'

const FormInput = ({ input, label, type, placeholder, meta }) =>
  <div className="input">
    {label && <label htmlFor={input.name}>{label}</label>}
    <Input
      {...input}
      type={type}
      placeholder={placeholder}
    />
    {meta.touched && meta.error &&
      <div className="form_error">{meta.error}</div>
    }
  </div>;

export default FormInput;
