import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signup } from '../../redux/modules/Auth/actions'

class Signup extends Component {
  render() {
    return (
      <div className="signup">
      <h3>Create An Account</h3>
        <form className="signup_form">
          <p>Email: <input type="email" /></p>
          <p>Password: <input type="password" /></p>
          <p><button type="submit">Create User</button></p>
        </form>
      </div>
    )
  }
}


export default Signup
