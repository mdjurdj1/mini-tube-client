import React, {Component} from 'react'
import Video from '../../components/Video'
import {connect} from 'react-redux'
import { Row, Col, Button, Glyphicon } from 'react-bootstrap'
import './style.css'


class VideoList extends Component {
  render() {
    const videos = this.props.videos.map((video, index) => {
      return (
      <div>
      <Row>
        <Col sm={4} md={4} mdOffset={3}>
          <Video key={index} video={video} videoId={video.id.videoId}/>
        </Col>
        <Col sm={3} md={3}>
        <Button onClick={e=>this.handleClick(e)} className="add_to_playlist"><Glyphicon glyph="plus" id='heart'/>&nbsp;Add to a playlist! </Button>
        </Col>
      </Row>
      <hr />
      </div>
      )
    })

    return (
      <div id="video_container">
      {videos}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { videos: state.videos.links }
}

export default connect(mapStateToProps)(VideoList)
