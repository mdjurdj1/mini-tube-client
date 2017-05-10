import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Col, Glyphicon } from 'react-bootstrap'
import { getPlaylistVideos} from '../../redux/modules/PlaylistVideos/actions';
import './playlist_videos_list.css'

class PlaylistsVideoList extends Component {

  handleClick(playlist_id) {
    // console.log(playlist_id)
    // this.props.deletePlaylistRequest(playlist_id)
  }

  render() {
    const videos = this.props.videos.map((video, index) => {
      <div key={index}>{video.name}</div>
    })
    return (
      <Col sm={4} md={4} mdOffset={4} id="playlists_container">
        {videos}
      </Col>
    )
  }
}

function mapStateToProps(state) {
  return { videos: state.playlistVideos.videos }
}

export default connect(mapStateToProps, { getPlaylistVideos })(PlaylistsVideoList)
