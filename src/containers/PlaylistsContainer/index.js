import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Col, Glyphicon } from 'react-bootstrap'
import { getPlaylists, deletePlaylistRequest } from '../../redux/modules/Playlists/actions';
import './playlists_container.css'

class PlaylistsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.getPlaylists()
    if(this.props.playlist) {
      this.setState({
      loading: false
      })
    }
  }

  componentWillUnmount() {}

  handleClick(playlist_id) {
    console.log(playlist_id)
    this.props.deletePlaylistRequest(playlist_id)
  }

  render() {
    let playlistLength = this.props.playlists.length
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
              <Glyphicon glyph="remove-circle" className='playlist_delete_glyph'/>
              </span>
        { !(playlistLength === index+1) ?  <hr className="playlist_divider"/> : null }
        </div>
      )
    })

    return (
      <Col sm={4} md={4} mdOffset={4} id="playlists_container">
         { !this.state.loading ? {playlists} : <h1>No Playlists saved here yet!</h1> }
      </Col>
    )
  }
}

function mapStateToProps(state) {
  return { playlists: state.playlists.playlists }
}

export default connect(mapStateToProps, { getPlaylists, deletePlaylistRequest })(PlaylistsContainer)
