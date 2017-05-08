import React, {Component} from 'react'
import VideoSearchForm from '../../components/VideoSearchForm'
import VideoDisplay from '../../containers/VideoDisplay'

export default class Search extends Component {
  render() {
    return (
      <div>
      <VideoSearchForm />
      <VideoDisplay />
      </div>
    )
  }
}
