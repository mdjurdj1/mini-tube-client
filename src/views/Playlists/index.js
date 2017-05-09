import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getPlaylists } from '../../redux/modules/Playlists/actions';
import { Button } from 'react-bootstrap'

import PlaylistCreateForm from '../../components/PlaylistCreateForm'

class Playlists extends Component {

  componentWillMount() {
    //fetch a user's playlists
  }

  render() {
    return (
      <div>
        <PlaylistCreateForm />
        <Button onClick={e=>this.props.getPlaylists(e)}>Get em</Button>
      </div>
    )
  }
}


export default connect(null, { getPlaylists } )(Playlists)
