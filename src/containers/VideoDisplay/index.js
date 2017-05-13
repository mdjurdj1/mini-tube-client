import React, {Component} from 'react'
import Video from '../../components/Video'
import PlaylistDropdown from '../../components/PlaylistDropdown'
import {connect} from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import './video_display.css'


class VideoList extends Component {
  render() {

    const videos = this.props.videos.map((video, index) => {
      return (
      <div key={index}>
        <Row>
          <Col md={4} mdOffset={3}>
            <Video key={index} video={video} videoId={video.id.videoId}/>
          </Col>
          <Col md={2}>
              <div className="add_to_playlist_container"><PlaylistDropdown video={video}/></div>
          </Col>
        </Row>
        <hr id="video_list_hr"/>
      </div>
      )
    })

    return (
     this.props.loading ?
        <div className="loader"></div>
        :
        <div className="search_results">{videos}</div>
    )
  }
}

function mapStateToProps(state) {
  return { videos: state.videos.links, loading: state.videos.loading }
}

export default connect(mapStateToProps)(VideoList)
