import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoadingSvg from '../../components/svg/Loading';
import Images from './Images';

class SearchImages extends Component {
  render() {
    let {
      images,
      isLoading,
      favImagesId
    } = this.props
    return (
      <Row>
        {
          isLoading ?
          <Col xs={12} className="Container-nowrap-center Loading-box">
            <LoadingSvg width="48px" height="48px" color="#ffffff"/>
          </Col>
          :
          <Col xs={12}>
            <Images 
              images={ images }
              favImagesId={ favImagesId }
            />
          </Col>
        }
      </Row>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    images: state.user.giphyImages,
    isLoading: state.user.isLoadingImage,
    favImagesId: state.user.favImagesId,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps) (SearchImages);

