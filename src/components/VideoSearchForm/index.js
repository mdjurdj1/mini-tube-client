import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Form, FormControl, FormGroup, ControlLabel, Button, Glyphicon } from 'react-bootstrap'
import * as actions from '../../redux/modules/Video/actions'
import './video_search_form.css'

class VideoSearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.actions.searchVids(`${this.state.input}`)
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <div className="VideoSearchForm">
        <Form inline onSubmit={(e)=>this.handleSubmit(e)}>
          <FormGroup controlId="formInlineSearch">
            <ControlLabel>Search For...</ControlLabel> &nbsp;
              <FormControl
                value={this.state.input}
                onChange={(e)=>this.handleChange(e)}
                type="text"
                placeholder="Hydraulic Press..."
              />
            <Button type='submit' id="search_submit" bsStyle="primary" ><Glyphicon glyph="search" id="search"/></Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(VideoSearchForm)
