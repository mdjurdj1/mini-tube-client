import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Glyphicon } from 'react-bootstrap'
import Alert from 'react-s-alert';

import {createPlaylistVideo, deleteVid} from '../../redux/modules/PlaylistVideos/actions'
import './playlist_dropdown.css'

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

  showAddAlert() {
    Alert.info('Added video to playlist!', {
           position: 'bottom-left',
           effect: 'slide',
           onShow: function () {
               console.log('Successfully added a video.')
           },
           beep: false,
           timeout: 1000,
           offset: 0
       });
  }

  render() {
    const p = this.props.playlist
    const index = this.props.key
    return (
      <li className="dropdown_li" key={index} onClick={(e)=>{this.handleClick(e, p)}}>
        { this.state.clicked === false ?
            <span onClick={this.showAddAlert}>
              <Glyphicon
                className="add_to_playlist_glyph"
                glyph="unchecked"/> &nbsp;&nbsp;
              <span className="li_text">{p.name}</span>
              </span> :
            <span>
              <Glyphicon
                className="add_to_playlist_glyph"
                glyph="check"/> &nbsp;&nbsp;
              <span className="li_text">{p.name}</span>
            </span>
           }
      </li>
    )
  }
}


export default connect(null, {createPlaylistVideo, deleteVid})(DropdownItem)
