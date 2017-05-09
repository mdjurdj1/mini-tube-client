import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getPlaylists } from '../../redux/modules/Playlists/actions';
import { Button } from 'react-bootstrap'

import PlaylistCreateForm from '../../components/PlaylistCreateForm'
import PlaylistsContainer from '../../containers/PlaylistsContainer'

class Playlists extends Component {


  render() {
    return (
      <div>
        <PlaylistCreateForm />
        <PlaylistsContainer />
      </div>
    )
  }
}


export default connect(null, { getPlaylists } )(Playlists)
