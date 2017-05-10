import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {connect} from 'react-redux'
import './styles.css'

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

  render() {

    const items = this.props.playlists.map((p, index) => {
      return (<li>{p.name}</li>)
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
        <i className="fa fa-plus" onClick={ this.toggleMenu }/>
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
export default connect(mapStateToProps)(PlaylistDropdown)
