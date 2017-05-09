import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getPlaylist } from '../../redux/modules/Playlists/actions';

class Playlist extends Component {

  componentWillMount() {
    let id = this.props.match.params.id
    this.props.getPlaylist(id)
  }

  render() {
    return (
      <div>
      {this.props.playlist ? 'hey'

      : 'ay'}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { playlist: state.playlists.playlist[0] }
}
export default connect(mapStateToProps, { getPlaylist })(Playlist)
