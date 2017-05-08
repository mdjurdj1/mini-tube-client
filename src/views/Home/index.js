import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap'
import './style.css'

const Home = () =>

<Grid>
  <Row>
    <Col xs={12} md={8} >
      <h1>Welcome to <span id="mini-tube">Mini-Tube!</span></h1>
      <p className="text">A simple, minimally featured Youtube Browser.</p>
    </Col>

    <Col xs={6} md={4} >
      <h3>Are you new here?</h3>
      <p className="text">Sign up!</p>
    </Col>
  </Row>
</Grid>


export default Home
