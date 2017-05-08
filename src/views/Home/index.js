import React, {Component} from 'react'
import { Col, Grid, Row, Button } from 'react-bootstrap'
import './style.css'

class Home extends Component {
render() {
  return (
      <Grid>
        <Row>
          <Col xs={12} md={8} >
            <h1>Welcome to <span id="mini-tube">Mini-Tube!</span></h1>
            <p className="text">A simple, minimally featured Youtube Browser.</p>
          </Col>

          <Col xs={6} md={4} >
            <h3>Are you new here?</h3>
            <Button bsStyle="primary" bsSize="large" block onClick={e => this.props.history.push("/signup")} >Sign Up</Button>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Home
