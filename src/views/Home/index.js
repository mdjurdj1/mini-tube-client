import React, {Component} from 'react'
import { Col, Grid, Row, Button } from 'react-bootstrap'
import './styles.css'

class Home extends Component {
render() {
  return (
      <div id="banner">
      <Grid>
        <Row id="home_container">
          <Col xs={12} md={8} >
            <h1><span id="welcome">Welcome to </span><span id="mini-tube">Mini-Tube!</span></h1>
            <p className="text">A simple, minimally featured Youtube Browser.</p>
          </Col>

          <Col xs={6} md={4} >
            <h3 id="new_here">Are you new here?</h3>
            <Button bsStyle="primary" bsSize="large" block onClick={e => this.props.history.push("/signup")} >Sign Up</Button>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={8} id="bufferCol">
          </Col>
        </Row>
      </Grid>
      </div>
    )
  }
}

export default Home
