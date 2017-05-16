import React, {Component} from 'react'
import {connect} from 'react-redux'
import './errors.css'

class ErrorAlert extends Component {
  render() {
    const email_errors = this.props.errors.email
    const password_errors = this.props.errors.password
    return (
      <div className="errors_notification">
        <p>Oops! We found an error with your information:</p>
        { email_errors ? <p><strong>Email: {email_errors}</strong> </p> : null }
        { password_errors ? <p><strong>Password: {password_errors}</strong></p> : null }
      </div>
    )
  }
}

function mapStateToProps(state){
  return { errors: state.auth.errors }
}

export default connect(mapStateToProps)(ErrorAlert)
