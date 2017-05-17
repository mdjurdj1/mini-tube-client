import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Glyphicon, Button } from 'react-bootstrap'

import {createPlaylistVideo} from '../../redux/modules/PlaylistVideos/actions'
import {createPlaylistRequest} from '../../redux/modules/Playlists/actions'
import './playlist_dropdown.css'

class DropdownCreateBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      createBoxActive: false,
      input: ""
    }
  }

  handleClick(e) {
    let toggleState = !this.state.createBoxActive;
    this.setState({
      createBoxActive: toggleState
    });
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    let playlist_name = this.state.input
    this.props.createPlaylistRequest(playlist_name)
    this.setState({
      createBoxActive: false
    });
  }

  render() {
    return (
      <div className="create_box_container">
        <span>
          { this.state.createBoxActive ?
            <form onSubmit={(e)=>this.handleSubmit(e)}>
              <input
                id="new_pl_input"
                onChange={(e)=>this.handleChange(e)}
                value={this.state.input}
                type="text"
                placeholder="Playlist name..."
              />&nbsp;&nbsp;
              <Button type="submit" bsStyle="primary" bsSize="xsmall">Create</Button>
            </form>
            :
            <div id="create_new_text" onClick={(e)=>this.handleClick(e)}>
                <Glyphicon glyph="plus" /><span id="new_pl_text">Create new playlist</span>
            </div>
           }
        </span>
      </div>
    )
  }
}


export default connect(null, {createPlaylistVideo, createPlaylistRequest})(DropdownCreateBox)
