import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Col, Glyphicon } from 'react-bootstrap'
import { getPlaylists, deletePlaylistRequest } from '../../redux/modules/Playlists/actions';
import './single_playlist_container.css'

class SinglePlaylistContainer extends Component {

  componentDidMount() {
    this.props.getVideoTagsForPlaylist()
  }

  handleClick(playlist_id) {
    console.log(playlist_id)
    this.props.deletePlaylistRequest(playlist_id)
  }

  render() {

    const playlists = this.props.playlists.map((playlist, index) => {
      return (
        <div key={index} className="playlist_div">
          &nbsp;&nbsp;&nbsp;
            <Link to={`/playlists/${playlist.id}`}>
              <Glyphicon glyph="equalizer" id='playlist_glyph'/>&nbsp;&nbsp;
              {playlist.name}
            </Link>
            <span
              onClick={() => {if(confirm('Delete this playlist?')) {this.handleClick(playlist.id)};}}
              >
              <Glyphicon glyph="remove" className='playlist_delete_glyph'/>
              </span>
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

export default connect(mapStateToProps, { getPlaylists, deletePlaylistRequest })(PlaylistsContainer)
