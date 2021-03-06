import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Col, Row, Glyphicon } from 'react-bootstrap'
import Video from '../../components/Video'
import { getVid } from '../../redux/modules/Video/actions';
import { deleteVid } from '../../redux/modules/PlaylistVideos/actions'
import './playlist_videos_list.css'

class PlaylistsVideoList extends Component {

  handleClick(e, v) {
    let id = v.id
    this.props.getVid(id)
  }

  handleDelete(video_id) {
    let playlist_id = this.props.id
    this.props.deleteVid(playlist_id, video_id)
  }

  render() {
    const videosLength = this.props.videos.length

    const videos = this.props.videos.map((video, index) => {
      return (
        <div key={index} className="playlist_video_box" >
        <Row>
          <Col md={6} lg={6} mdOffset={3}>
              <Video key={index} video={video} videoId={video.videoId}/>
              <div className="playlist_video_info">
                <h1 className="vidName">{video.name}</h1>
                <Glyphicon
                  onClick={() => this.handleDelete(video.id)}
                  glyph="remove" className='playlist_video_delete_glyph'
                />
              </div>
            </Col>
          </Row>
        </div>
      )
    })

    let content = null;
    if(this.props.loading) {
      content = <div className="loader"></div>
    } else if(videos.length > 0) {
      content = <div>{videos}</div>
    } else {
      content = <Col sm={4} md={4} mdOffset={4} id="playlists_container">
          <h1>No videos have been saved for this playlist yet.</h1>
          <h1><Link to='/search'>Lets Search to find some!</Link></h1>
        </Col>
    }

    return (
      <div>
      {content}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { videos: state.playlistVideos.videos, loading: state.playlistVideos.loading }
}

export default connect(mapStateToProps, {getVid, deleteVid})(PlaylistsVideoList)
