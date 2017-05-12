import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Glyphicon } from 'react-bootstrap'

import {createPlaylistVideo, deleteVid} from '../../redux/modules/PlaylistVideos/actions'
import './playlist_dropdown.css'

class DropdownCreateBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      createBoxActive: false
    }
  }

  handleClick(e) {
    let toggleState = !this.state.createBoxActive;
    this.setState({
      createBoxActive: toggleState
    });
  }

  render() {
    return (
      <div className="create_box_container">
        <span onClick={(e)=>this.handleClick(e)}>
          {this.state.createBoxActive ? "Active" : "Inactive" }
        </span>
      </div>
    )
  }
}


export default connect(null, {createPlaylistVideo, deleteVid})(DropdownCreateBox)
