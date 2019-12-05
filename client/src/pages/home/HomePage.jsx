import React, { Component } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getImageFavourites,
  fetchMoreGiphyImage,
} from '../../store/user/user.actions';
import './home.css';
import '../../assets/css/bootstrap/boot.tab.css';
import '../../assets/css/bootstrap/boot.form.css';
import '../../assets/css/bootstrap/boot.button.css';
import SearchForm from '../../components/home/SearchForm';
import SearchImages from '../../components/home/SearchImages';
import LoadingSvg from '../../components/svg/Loading';

class HomePage extends Component {
  componentDidMount() {
    let {
      getImageFavourites
    } = this.props
    getImageFavourites()
  }

  render() {
    let {
      images,
      fetchMoreGiphyImage,
      searchInput,
      isFetchLoading,
    } = this.props
    // console.log('from home', this.props)
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <SearchForm />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            {
              images.length <= 0 ?
              <div className="Search-error">No searched images found.</div>
              :
              <SearchImages />

            }
          </Col>
        </Row>
        <Row style={{ marginTop: '1em' }}>
          <Col xs={12} className="Container-nowrap-center">
            {
              images.length > 0 && !isFetchLoading ?
              <Button 
                onClick={ (e) => fetchMoreGiphyImage(e, searchInput, images)  }
                variant="primary"
              >
                Fetch More
              </Button>
              :
              images.length > 0 && isFetchLoading ?
              <Button 
                className="Container-nowrap-center"
                variant="primary"
              >
                <LoadingSvg width="28px" height="28px" color="#ffffff"/>
              </Button>
              :
              <div></div>
            }
          </Col>
        </Row>
      </Container>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    searchInput: state.user.searchImages,
    images: state.user.giphyImages,
    isFetchLoading: state.user.isFetchImageLoading,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getImageFavourites,
  fetchMoreGiphyImage,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps) (HomePage);
