import React, {Component} from 'react'
import { Row, Col, Glyphicon } from 'react-bootstrap'

import VideoSearchForm from '../../components/VideoSearchForm'
import VideoDisplay from '../../containers/VideoDisplay'
import './search.css'

export default class Search extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <Row>
            <Col xs={12} md={12} id="bufferCol">
              <h1 id="search_header"><Glyphicon glyph="search" id="search_glyph"/> Search Videos</h1>
            </Col>
          </Row>
        </div>
        <VideoSearchForm />
        <VideoDisplay />
      </div>
    )
  }
}
