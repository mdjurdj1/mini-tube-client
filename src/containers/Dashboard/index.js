import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap'
import { connect } from 'react-redux'
import './dashboard.css'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <Row>
            <Col xs={12} md={12} id="bufferCol">
                <h1 id="dashboard_h1"><span id="welcome">Welcome  </span><span id="dash_username">{this.props.username}!</span></h1>
            </Col>
          </Row>
        </div>

        <div className="dashboard_container">
          <Row>
            <Col md={4} mdOffset={4}>
              <p>Let's get started!</p>
              <p>&nbsp;&nbsp;Create playlists</p>
              <p>&nbsp;&nbsp;&nbsp;Search for videos using the navbar</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Save videos to your custom playlists!</p>
            </Col>
          </Row>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { username: state.auth.currentUser.email }
}

export default connect(mapStateToProps)(Dashboard)
