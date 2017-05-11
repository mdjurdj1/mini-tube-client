import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Glyphicon } from 'react-bootstrap'

import {createPlaylistVideo, deleteVid} from '../../redux/modules/PlaylistVideos/actions'


class DropdownItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  handleClick(e, playlist) {
    let playlist_id = playlist.id
    let video = this.props.video
    let video_id = video.id
    if(this.state.clicked === false) {
      this.props.createPlaylistVideo(playlist_id, video)
      this.setState({
        clicked: true
      })
    } else if(this.state.clicked === true) {
      this.props.deleteVid(playlist_id, video_id)
      this.setState({
        clicked: false
      })
    }
  }

  render() {
    const p = this.props.playlist
    const index = this.props.key
    return (
      <li key={index} onClick={(e)=>{this.handleClick(e, p)}}>
        { this.state.clicked === false ?
            <span><Glyphicon className="add_to_playlist_glyph" glyph="heart-empty"/>&nbsp;&nbsp; {p.name}</span> :
            <span><Glyphicon className="add_to_playlist_glyph" glyph="check"/>&nbsp;&nbsp; {p.name}</span>
           }
        <hr id="menu_divider"/>
      </li>
    )
  }
}

export default connect(null, {createPlaylistVideo, deleteVid})(DropdownItem)
