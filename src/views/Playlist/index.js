import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Col, Glyphicon} from 'react-bootstrap'
import { getPlaylist, resetPlaylist } from '../../redux/modules/Playlists/actions';
import { getPlaylistVideos } from '../../redux/modules/PlaylistVideos/actions'
import './styles.css'

class Playlist extends Component {

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.getPlaylist(id)
  }

  componentWillUnmount() {
    this.props.resetPlaylist()
  }

  handleClick(e) {
    let id = this.props.match.params.id
    this.props.getPlaylistVideos(id)
  }
  render() {
    return (
    <div>
    { !this.props.playlist ? <h1>'Playlist Not found!'</h1> :
        <div className="banner">
          <Row>
            <Col xs={12} md={12} id="bufferCol">
              <h1 id="playlist_name"><Glyphicon glyph="list" />&nbsp;&nbsp;{this.props.playlist.name}</h1>
            </Col>
          </Row>
        </div>  }
    <h1>
      get videos for this playlist <button onClick={(e)=>this.handleClick(e)}>bleach get</button>
      </h1>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return { playlist: state.playlists.playlist }
}
export default connect(mapStateToProps, { getPlaylist, resetPlaylist, getPlaylistVideos })(Playlist)
