import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getPlaylists } from '../../redux/modules/Playlists/actions';
import { Row, Col, Glyphicon } from 'react-bootstrap'

import PlaylistCreateForm from '../../components/PlaylistCreateForm'
import PlaylistsContainer from '../../containers/PlaylistsContainer'
import './playlists.css'

class Playlists extends Component {


  render() {
    return (
      <div>
        <div id="banner">
          <Row>
            <Col xs={12} md={12} id="bufferCol">
              <h1 id="playlists_header"><Glyphicon glyph="headphones" />&nbsp; Your Playlists</h1>
            </Col>
          </Row>
        </div>
        <PlaylistCreateForm />
        <PlaylistsContainer />
      </div>
    )
  }
}


export default connect(null, { getPlaylists } )(Playlists)
