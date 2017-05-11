import React, {Component} from 'react'

class ErrorAlert extends Component {
  render() {

    return (
      <div className="login_errors">
        {this.props.errors}
      </div>
    )
  }
}

export default ErrorAlert
