import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Col, Glyphicon} from 'react-bootstrap'
import { getPlaylist, resetPlaylist } from '../../redux/modules/Playlists/actions';
import './styles.css'

class Playlist extends Component {

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.getPlaylist(id)
  }

  componentWillUnmount() {
    this.props.resetPlaylist()
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
    <h1>get videos for this playlist</h1>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return { playlist: state.playlists.playlist }
}
export default connect(mapStateToProps, { getPlaylist, resetPlaylist })(Playlist)
