import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Col, Glyphicon } from 'react-bootstrap'
import { getPlaylists, deletePlaylistRequest } from '../../redux/modules/Playlists/actions';
import './playlists_container.css'

class PlaylistsContainer extends Component {

  componentDidMount() {
    this.props.getPlaylists()
  }

  componentWillUnmount() {}

  handleClick(playlist_id) {
    console.log(playlist_id)
    this.props.deletePlaylistRequest(playlist_id)
  }

  render() {
    let playlistLength = this.props.playlists.length
    const playlists = this.props.playlists.map((playlist, index) => {
      let videoCount = playlist.video_count === 1 ? `(1 video)` : `(${playlist.video_count} videos)`
      return (
          <div key={index} className="playlist_div">
            &nbsp;&nbsp;&nbsp;
              <Link to={`/playlists/${playlist.id}`}>
                <Glyphicon glyph="expand" id='playlist_glyph'/>&nbsp;&nbsp;&nbsp;&nbsp;
                {playlist.name} {videoCount}
              </Link>
              <span
                onClick={() => {if(confirm('Delete this playlist?')) {this.handleClick(playlist.id)};}}
                >
                <Glyphicon glyph="remove-circle" className='playlist_delete_glyph'/>
                </span>
          { !(playlistLength === index+1) ?  <hr className="playlist_divider"/> : null }
          </div>
        )
    })

    return (
      playlists.length > 0 ?
        <Col sm={4} md={4} mdOffset={4} id="playlists_container">
           {playlists}
        </Col> :
        <Col sm={4} md={4} mdOffset={4} id="playlists_container">
          <h1>No playlists have been saved. Create a new one above!</h1>
        </Col>
    )
  }
}

function mapStateToProps(state) {
  return { playlists: state.playlists.playlists }
}

export default connect(mapStateToProps, { getPlaylists, deletePlaylistRequest })(PlaylistsContainer)
