// PURPOSE: Actions documented in this store section is specialised for User State Management purposes
import axios from 'axios';

// To handle store changes in form input during searching images
export const handleChangesSearch = (e) => {
  return (dispatch) => {
    let target = e.target
    let inputId = target.id
    let value = target.value

    // Updating total and price information to store
    if (inputId === 'searchImages') {
      dispatch(setSearchImagesInput(value))
    } 
  }
}

// Reducer: to set search images input
const setSearchImagesInput = (data) => {
  return {
    type: 'SET_SEARCH_IMAGES',
    payload: data
  }
}

// To handle store changes in form input during searching images
export const getGiphyImages = (e, searchInput) => {
  return (dispatch) => {
    e.preventDefault();

    dispatch(setGiphyImagesLoadingStatus(true))
    
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=JPj9Ot5N6th4djaq4QL33fcdglVU5a37&limit=8`)
      .then(response => {
        // console.log(response)
        dispatch(setGiphyImagesLoadingStatus(false))
        dispatch(setGiphyImages(response.data.data))
      })
      .catch(err => {
        console.log('ERROR: Get Giphy Images', err)
      })
  }
}

// Reducer: to set search images input
const setGiphyImages = (data) => {
  return {
    type: 'SET_GIPHY_IMAGES',
    payload: data
  }
}

// Reducer: to set image loading status
const setGiphyImagesLoadingStatus = (data) => {
  return {
    type: 'SET_GIPHY_IMAGES_LOADING_STATUS',
    payload: data
  }
}

// To get image favourites from local storage
export const getImageFavourites = (imageId) => {
  return (dispatch) => {
    let storage = window.localStorage
    let favourites = JSON.parse(storage.getItem('GE_favourites'))

    dispatch(setImagesFavId(favourites))

    return favourites
  }
}

// Reducer: to set image loading status
const setImagesFavId = (data) => {
  return {
    type: 'SET_FAV_IMAGES_ID',
    payload: data
  }
}

// To handle store changes in image favourites
export const handleImageFavourites = (imageId) => {
  return (dispatch) => {

    // Obtain favourite images from local storages - if any
    let storage = window.localStorage
    let favourites = JSON.parse(storage.getItem('GE_favourites'))

    // Validate imageId to array of favourite images
    // Push to the array if imageID is not found in the array of favourite images
    // Save to local storage afterwards
    let imageIndex = favourites.indexOf(imageId)

    if (imageIndex < 0) {
      favourites.push(imageId)
    } else {
      favourites.splice(imageIndex, 1)
    }
    
    storage.setItem('GE_favourites', JSON.stringify(favourites))
    dispatch(setImagesFavId(favourites))
  }
}

// To get image favourites from GIPHY APIs
export const getGiphyImageFavourites = (imageIds) => {
  return (dispatch) => {

    let GIPHY_Ids = imageIds.join(',')
    axios.get(`http://api.giphy.com/v1/gifs?api_key=JPj9Ot5N6th4djaq4QL33fcdglVU5a37&ids=${GIPHY_Ids}`)
      .then(response => {
        dispatch(setImagesFavLoadingStatus(false))
        dispatch(setImagesFav(response.data.data))
      })
      .catch(err => {
        console.log('ERROR: Get Fav Giphy Images', err)
      })
  }
}

// Reducer: to set image loading status
const setImagesFav = (data) => {
  return {
    type: 'SET_FAV_IMAGES',
    payload: data
  }
}

// Reducer: to set image loading status
const setImagesFavLoadingStatus = (data) => {
  return {
    type: 'SET_FAV_IMAGES_LOADING_STATUS',
    payload: data
  }
}





