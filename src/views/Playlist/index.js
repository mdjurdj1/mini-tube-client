import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import { getPlaylist } from '../../redux/modules/Playlists/actions';

class Playlist extends Component {

  componentWillMount() {
    let id = this.props.match.params.id
    this.props.getPlaylist(id)
  }

  render() {
    return (
      <div className="banner">
        <Row>
          <Col xs={12} md={12} id="bufferCol">
          {this.props.playlist ?
            <h1>{this.props.playlist.name}</h1>

          : 'No Playlist was found.'}
          </Col>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { playlist: state.playlists.playlist }
}
export default connect(mapStateToProps, { getPlaylist })(Playlist)
