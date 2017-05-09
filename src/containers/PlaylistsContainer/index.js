import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Col, Glyphicon } from 'react-bootstrap'
import './styles.css'

class PlaylistsContainer extends Component {
  render() {

    const playlists = this.props.playlists.map((playlist, index) => {
      return (
        <div key={index}>
          <Glyphicon glyph="equalizer" id='playlist_glyph'/>&nbsp;
          <Link to={`/playlists/${playlist.id}`} activeClassName="active">{playlist.name}</Link>
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
