import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Col, Glyphicon} from 'react-bootstrap'

// import PlaylistVideosDisplay from '../../containers/PlaylistVideosDisplay'
import PlaylistVideosList from '../../containers/PlaylistVideosList'
import { getPlaylist, resetPlaylist } from '../../redux/modules/Playlists/actions';
import { getPlaylistVideos } from '../../redux/modules/PlaylistVideos/actions'
import './styles.css'

class Playlist extends Component {

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.getPlaylist(id)
    this.props.getPlaylistVideos(id)
  }

  componentWillUnmount() {
    this.props.resetPlaylist()
  }

  render() {
    return (
    <div className="playlist_view">
    { !this.props.playlist ? <h1>'Loading...'</h1> :
        <div className="banner">
          <Row>
            <Col xs={12} md={12} id="bufferCol">
              <h1 id="playlist_name"><Glyphicon glyph="list" />&nbsp;&nbsp;{this.props.playlist.name}</h1>
            </Col>
          </Row>
        </div>  }
        <PlaylistVideosList id={this.props.match.params.id} />
    </div>
    )
  }
}

function mapStateToProps(state) {
  return { playlist: state.playlists.playlist, videos: state.playlistVideos.videos }
}
export default connect(mapStateToProps, { getPlaylist, resetPlaylist, getPlaylistVideos })(Playlist)
