import React, {Component} from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
import YouTube from 'react-youtube'
import './video.css'

export default class Video extends Component {
  render() {
      const opts = {
        height: '300',
        width: '570',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };

      return (
          <div className='video_box'>
            <YouTube
              videoId={this.props.videoId}
              opts={opts}
              onReady={this._onReady}
            /> <br />
            <Button className="add_to_playlist"><Glyphicon glyph="heart" id='heart'/>&nbsp;Add to a playlist! </Button>
        </div>
      );
    }

    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  }
