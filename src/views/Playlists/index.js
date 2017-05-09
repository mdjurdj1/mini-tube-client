import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getPlaylists } from '../../redux/modules/Playlists/actions';
import { Button } from 'react-bootstrap'

import PlaylistCreateForm from '../../components/PlaylistCreateForm'
import PlaylistsContainer from '../../containers/PlaylistsContainer'

class Playlists extends Component {

  componentWillMount() {
    this.props.getPlaylists
  }

  render() {
    return (
      <div>
        <PlaylistCreateForm />
        <PlaylistsContainer />
        <Button onClick={e=>this.props.getPlaylists(e)}>Get em</Button>
      </div>
    )
  }
}


export default connect(null, { getPlaylists } )(Playlists)
