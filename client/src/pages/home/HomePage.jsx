import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getImageFavourites
} from '../../store/user/user.actions';
import './home.css';
import '../../assets/css/bootstrap/boot.tab.css';
import '../../assets/css/bootstrap/boot.form.css';
import SearchForm from '../../components/home/SearchForm';
import SearchImages from '../../components/home/SearchImages';

class HomePage extends Component {
  componentDidMount() {
    let {
      getImageFavourites
    } = this.props
    getImageFavourites()
  }

  render() {
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
            <SearchImages />
          </Col>
        </Row>
      </Container>
    )
  }
}


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getImageFavourites,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps) (HomePage);
