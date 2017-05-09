import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Row, Col, Glyphicon } from 'react-bootstrap'
import './styles.css'

class PlaylistsContainer extends Component {
  render() {

    const playlists = this.props.playlists.map((playlist, index) => {
      return (
        <div>
          <Glyphicon glyph="equalizer" id='playlist_glyph'/> {playlist.name}
          <hr />
        </div>
      )
    })

    return (
      <Col sm={4} md={4} mdOffset={4} id="playlists_container">
        {playlists}
      </Col> 
    )
  }
}

function mapStateToProps(state) {
  return { playlists: state.playlists.playlists }
}
export default connect(mapStateToProps)(PlaylistsContainer)
