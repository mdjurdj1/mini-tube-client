import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getPlaylist } from '../../redux/modules/Playlists/actions';

class Playlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valid: false
    }
  }

  componentWillMount() {
    if(this.props.getPlaylist(this.props.match.params)) {
      this.setState({
        valid: true
      })
    }
  }

  render() {
    return (
      <div>Hello</div>
    )
  }
}

export default connect(null, { getPlaylist })(Playlist)
