import React, {Component} from 'react'
import Video from '../../components/Video'
import PlaylistDropdown from '../../components/PlaylistDropdown'
import {connect} from 'react-redux'
import { Row, Col, Button, Glyphicon, MenuItem } from 'react-bootstrap'
import './video_display.css'


class VideoList extends Component {
  render() {

    const videos = this.props.videos.map((video, index) => {
      return (
      <div key={index}>
        <Row>
          <Col sm={4} md={4} smOffset={3} mdOffset={3}>
            <Video key={index} video={video} videoId={video.id.videoId}/>
          </Col>
          <Col sm={2} md={2} lg={2} className="add_to_playlist_container">
              <PlaylistDropdown />
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
  return { videos: state.videos.links, playlists: state.playlists.playlists }
}

export default connect(mapStateToProps)(VideoList)
