import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Glyphicon } from 'react-bootstrap'

import {createPlaylistVideo} from '../../redux/modules/PlaylistVideos/actions'


class DropdownItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  handleClick(e, p) {
    let id = p.id
    let video = this.props.video
    this.props.createPlaylistVideo(id, video)
  }

  render() {
    const p = this.props.playlist
    const index = this.props.key
    return (
      <li key={index} onClick={(e)=>{this.handleClick(e, p)}}>
        <Glyphicon id="checked" glyph="heart-empty"/>&nbsp;&nbsp; {p.name}
        <hr id="menu_divider"/>
      </li>
    )
  }
}

export default connect(null, {createPlaylistVideo})(DropdownItem)
