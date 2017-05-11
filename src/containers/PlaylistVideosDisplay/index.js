// import React, {Component} from 'react'
// import Video from '../../components/Video'
// import {connect} from 'react-redux'
// import { Row, Col, Button, Glyphicon, MenuItem } from 'react-bootstrap'
// import { getPlaylistVideos } from '../../redux/modules/PlaylistVideos/actions'
// import './playlist_videos_display.css'
//
//
// class PlaylistVideosDisplay extends Component {
//
//   componentDidMount() {
//     this.props.getPlaylistVideos()
//   }
//
//   render() {
//
//     const videos = this.props.videos.map((video, index) => {
//       return (
//       <div key={index}>
//         <Row>
//           <Col md={4} mdOffset={3}>
//             <Video key={index} video={video} videoId={video.id.videoId}/>
//           </Col>
//           <Col md={2} className="add_to_playlist_container">
//               <div>"playlist container"</div>
//           </Col>
//         </Row>
//         <hr />
//       </div>
//       )
//     })
//
//     return (
//       <div id="video_container">
//       {videos}
//       </div>
//     )
//   }
// }
//
// function mapStateToProps(state) {
//   return { videos: state.videos.links, playlists: state.playlists.playlists }
// }
//
// export default connect(mapStateToProps, { getPlaylistVideos })(PlaylistVideosDisplay)
