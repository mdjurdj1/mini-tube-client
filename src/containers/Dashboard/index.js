import React, {Component} from 'react'
import {Row, Col, Glyphicon} from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
              <p>Here's how to get started!</p>
              <hr id="dash_hr"/>
              <p>
                <Glyphicon className="dashboard_glyph" glyph="align-left"/>
                <span className="dash_text"><Link className="dash_link" to='/playlists'>Create playlists</Link> </span>
              </p>
              <p>
                <Glyphicon className="dashboard_glyph" glyph="search"/>
                <span className="dash_text"><Link className="dash_link" to='/search'>Search for videos using the navbar</Link></span>
              </p>
              <p>
                <Glyphicon className="dashboard_glyph" glyph="heart"/>
                <span className="dash_text">Save videos to your custom playlists!</span>
              </p>
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
