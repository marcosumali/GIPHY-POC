import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoadingSvg from '../../components/svg/Loading';
import Images from '../../components/home/Images';
import {
  getGiphyImageFavourites,
  getImageFavourites,
} from '../../store/user/user.actions';

class FavPage extends Component {
  async componentDidMount() {
    let {
      getGiphyImageFavourites,
      getImageFavourites
    } = this.props
    let favIds = await getImageFavourites()
    getGiphyImageFavourites(favIds)
  }
  render() {
    let {
      favImagesId,
      favImages,
      isLoading,
    } = this.props
    // console.log('from FavPage', this.props)
    return (
      <Container>
        <Row>
          <Col xs={12}>
            {
              isLoading ?
              <Col xs={12} className="Container-nowrap-center Loading-box">
                <LoadingSvg width="48px" height="48px" color="#ffffff"/>
              </Col>
              :
              <div>
                {
                  favImages.length > 0 ?
                  <Images 
                    images={ favImages }
                    favImagesId={ favImagesId }
                  />
                  :
                  <div className="Search-error">You don't have any favourite images.</div>
                }
              </div>
            }
          </Col>
        </Row>
      </Container>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    favImagesId: state.user.favImagesId,
    favImages: state.user.favImages,
    isLoading: state.user.isFavImageLoading,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getGiphyImageFavourites,
  getImageFavourites,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps) (FavPage);
