// import React, { Component } from 'react';
// import { Col, Row } from 'react-bootstrap';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import LoadingSvg from '../../components/svg/Loading';
// import Images from './Images';
// import {
//   getGiphyImageFavourites
// } from '../../store/user/user.actions';

// class Favourites extends Component {
//   componentDidUpdate() {
//     let {
//       getGiphyImageFavourites,
//       favImagesId
//     } = this.props
//     getGiphyImageFavourites(favImagesId)
//   }
//   render() {
//     console.log('from Favourites', this.props)
//     return (
//       <div>
//         Hellow
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     favImagesId: state.user.favImagesId,
//   }
// }

// const mapDispatchToProps = dispatch => bindActionCreators({
//   getGiphyImageFavourites
// }, dispatch)


// export default connect(mapStateToProps, mapDispatchToProps) (Favourites);
