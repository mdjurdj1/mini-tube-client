import React, {Component} from 'react'
import { connect } from 'react-redux'

class PlaylistsContainer extends Component {
  render() {

    const playlists = this.props.playlists.map((playlist, index) => {
      return <div>{playlist.name}</div>
    })

    return (
      <div>
     {playlists}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { playlists: state.playlists.playlists }
}
export default connect(mapStateToProps)(PlaylistsContainer)
