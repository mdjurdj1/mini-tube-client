import React, {Component} from 'react'
import Video from '../../components/Video'
import {connect} from 'react-redux'


class VideoList extends Component {
  render() {
    const videos = this.props.videos.map((video, index) => {
      return (
        <Video key={index} videoId={video.id.videoId}/>
      )
    })

    return (
      <div>
      {videos}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { videos: state.videos.links }
}

export default connect(mapStateToProps)(VideoList)
