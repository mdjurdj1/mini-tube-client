import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getPlaylists } from '../../redux/modules/Playlists/actions';
import { Row, Col } from 'react-bootstrap'

import PlaylistCreateForm from '../../components/PlaylistCreateForm'
import PlaylistsContainer from '../../containers/PlaylistsContainer'

class Playlists extends Component {


  render() {
    return (
      <div>
        <div id="banner">
          <Row>
            <Col xs={12} md={12} id="bufferCol">
              <PlaylistCreateForm />
            </Col>
          </Row>
        </div>
        <PlaylistsContainer />
      </div>
    )
  }
}


export default connect(null, { getPlaylists } )(Playlists)
