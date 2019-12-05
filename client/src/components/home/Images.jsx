import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  handleImageFavourites,
} from '../../store/user/user.actions';

class Images extends Component {
  // Function to handle display heart opaque on hover
  handleHover = (index) => {
    let relatedOpaqueHeart = document.getElementById(`heart${index}`)
    let relatedOpaqueHeartClass = relatedOpaqueHeart.className.split(' ')
    let displayIndex = relatedOpaqueHeartClass.indexOf('Image-display')

    if (displayIndex < 0) {
      relatedOpaqueHeart.classList.add('Image-display')
    } else {
      relatedOpaqueHeart.classList.remove('Image-display')
    }
  }

  render() {
    let {
      images,
      handleImageFavourites,
      favImagesId
    } = this.props
    return (
      <Row>
        {
          images && images.map((image, index) => {
            return (
              <Col xs={12} sm={4} lg={3} key={'image' + index}>
                <div className="Container-image">
                  {/* GIPHY Image */}
                  <img
                    onMouseOver={() => this.handleHover(index)}
                    onMouseLeave={() => this.handleHover(index)}
                    className={ `Image-border Image Center-cropped` } 
                    style={{ backgroundImage: `url(${image.images.original.url})` }}
                    onClick={() => handleImageFavourites(image.id) }
                    alt=""
                  />
                  {/* Full Heart Image */}
                  <div className="Position-bottom-right">
                    {
                      favImagesId && favImagesId.map((imageId, index) => {
                        return (
                          <div key={ 'heart' + index }>
                            {
                              image.id === imageId ?
                              <img  
                                className="Image-heart" 
                                src={ process.env.PUBLIC_URL + '/assets/images/iconfinder_heart.png' } 
                                alt="heart" 
                              />
                              :
                              <div></div>
                            }
                          </div>
                        )
                      })
                    }
                  </div>
                  {/* Image Heart Opaque */}
                  <div id={ `heart${index}` } className="Position-bottom-right Image-heart-opaque-border">
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