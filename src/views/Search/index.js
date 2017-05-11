import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap'
import VideoSearchForm from '../../components/VideoSearchForm'
import VideoDisplay from '../../containers/VideoDisplay'
import './styles.css'

export default class Search extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <Row>
            <Col xs={12} md={12} id="bufferCol">
              <VideoSearchForm />
            </Col>
          </Row>
        </div>
        <VideoDisplay />
      </div>
    )
  }
}
