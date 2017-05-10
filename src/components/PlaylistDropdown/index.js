import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Glyphicon} from 'react-bootstrap'
import {connect} from 'react-redux'

import {createPlaylistVideo} from '../../redux/modules/PlaylistVideos/actions'
import './playlist_dropdown.css'

class PlaylistDropdown extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuActive: false
    };
  }

  toggleMenu() {
    let menuState = !this.state.menuActive;
    this.setState({
      menuActive: menuState
    });
  }

  handleClick(e, p) {
    let id = p.id
    let video = this.props.video
    this.props.createPlaylistVideo(id, video)
  }

  render() {

    const items = this.props.playlists.map((p, index) => {
      return (
        <li key={index} onClick={(e)=>{this.handleClick(e, p)}}>
          <Glyphicon id="checked" glyph="heart-empty"/>&nbsp;&nbsp; {p.name}
          <hr id="menu_divider"/>
        </li>)
    })

    let menu;
    if(this.state.menuActive) {
      menu = <div>
                <ul id="dropdown">
                  {items}
                </ul>
              </div>
    } else {
      menu = "";
    }
    return (
      <div id="menu">
      <span id="wanna_add" onClick={this.toggleMenu}><Glyphicon glyph="plus" id='plus' />&nbsp; Add this video to a playlist!</span>
      <ReactCSSTransitionGroup transitionName="menu" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
        {menu}
      </ReactCSSTransitionGroup>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return { playlists: state.playlists.playlists }
}
export default connect(mapStateToProps, {createPlaylistVideo})(PlaylistDropdown)
