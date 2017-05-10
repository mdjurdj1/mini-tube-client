import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Col, Glyphicon } from 'react-bootstrap'
import Video from '../../components/Video'
import { getVid } from '../../redux/modules/Video/actions';
import { deleteVid } from '../../redux/modules/PlaylistVideos/actions'
import './playlist_videos_list.css'

class PlaylistsVideoList extends Component {

  handleClick(e, v) {
    let id = v.id
    this.props.getVid(id)
  }

  handleDelete(id) {
    this.props.deleteVid(id)
  }

  render() {
    const videos = this.props.videos.map((video, index) => {
      return (
        <div key={index}>
          <h1 id="vidName" onClick={e=>this.handleClick(e, video)}>{video.name}
            <Glyphicon
              onClick={() => this.handleDelete(video.id)}
              glyph="remove" className='playlist_delete_glyph'/>
          </h1>
          <Video key={index} video={video} videoId={video.videoId}/>
          <hr />
        </div>
      )
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

export default connect(mapStateToProps, {getVid, deleteVid})(PlaylistsVideoList)
