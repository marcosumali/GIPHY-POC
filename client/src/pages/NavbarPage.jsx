import React, { Component } from 'react';

import Navbar from '../components/navbar/Navbar';
import HomePage from '../pages/home/HomePage';
import FavouritePage from '../pages/user/FavPage';

export default class NavbarPage extends Component {
  render() {
    let {
      match
    } = this.props
    // console.log('from Navbar', this.props)
    return (
      <div>
        <Navbar />
        {
          match.path === '/' ?
          <HomePage />
          :
          match.path === '/favourites' ?
          <FavouritePage />
          :
          <div></div>
        }
      </div>
    )
  }
}
