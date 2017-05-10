import React, {Component} from 'react'
import { browserHistory } from 'react-router-dom';
import {connect} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import { getPlaylist } from '../../redux/modules/Playlists/actions';
import './styles.css'

class Playlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playlist: {
        name: "Playlist not found."
      }
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.getPlaylist(id)
  }


  render() {
    return (
    <div>
        <div className="banner">
          <Row>
            <Col xs={12} md={12} id="bufferCol">
              <h1 id="playlist_name">{this.props.playlist.name}</h1>
            </Col>
          </Row>
        </div>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return { playlist: state.playlists.playlist }
}
export default connect(mapStateToProps, { getPlaylist })(Playlist)
