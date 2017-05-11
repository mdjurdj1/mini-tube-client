import React, {Component} from 'react'
import { connect } from 'react-redux'
import YouTube from 'react-youtube'

import { createPlaylistVideo } from '../../redux/modules/PlaylistVideos/actions'
import './video.css'

class Video extends Component {

  render() {
      const opts = {
        height: '300',
        width: '570',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };

      return (
            <YouTube
              videoId={this.props.videoId}
              opts={opts}
              onReady={this._onReady}
            />
      );
    }

    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  }

export default connect(null, { createPlaylistVideo })(Video)
