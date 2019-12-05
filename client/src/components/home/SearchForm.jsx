import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form } from 'react-bootstrap';

import {
  handleChangesSearch,
  getGiphyImages,
} from '../../store/user/user.actions';

class SearchForm extends Component {
  render() {
    let {
      handleChangesSearch,
      getGiphyImages,
      searchInput,
    } = this.props

    return (
      <Form onSubmit={(e) => getGiphyImages(e, searchInput) }>
        <Form.Group controlId="searchImages">
          <Form.Control 
            type="text"
            onChange={ (e) => handleChangesSearch(e) }
            placeholder="Start Seaching Images..." 
          />
        </Form.Group>
      </Form>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    searchInput: state.user.searchImages,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  handleChangesSearch,
  getGiphyImages,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps) (SearchForm);
