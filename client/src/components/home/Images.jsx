import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  handleImageFavourites,
} from '../../store/user/user.actions';

class Images extends Component {
  render() {
    let {
      images,
      handleImageFavourites,
      favImagesId
    } = this.props
    return (
      <Row>
        {
          images.map((image, index) => {
            return (
              <Col xs={12} sm={4} lg={3} key={'image' + index}>
                <div className="Container-image">
                  <div className="Image-line">
                    <div
                      className="Image-border Image Center-cropped" 
                      style={{ backgroundImage: `url(${image.images.original.url})` }}
                      onClick={() => handleImageFavourites(image.id) }
                    >
                    </div>
                  </div>
                  <div className="Position-bottom-right">
                    {
                      favImagesId.map((imageId, index) => {
                        return (
                          <div key={ 'heart' + index }>
                            {
                              image.id === imageId ?
                              <img  className="Image-heart" src={ process.env.PUBLIC_URL + '/assets/images/iconfinder_heart.png' } alt="heart" />
                              :
                              <div></div>
                            }
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className="Position-bottom-right Image-heart-opaque-border">
                    <img className="Image-heart-opaque" src={ process.env.PUBLIC_URL + '/assets/images/iconfinder_heart.png' } alt="heart" />
                  </div>
                </div>
              </Col>
            )
          })
        }
      </Row>
    )
  }
}


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  handleImageFavourites,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps) (Images);