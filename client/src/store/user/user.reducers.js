let initialState = {
  searchImages: '',
  giphyImages: [],
  favImagesId: [],
  isLoadingImage: false,
  favImages: [],
  isFavImageLoading: true,
}

const userDataList = (state = { ...initialState }, action) => {
  switch (action.type) {
    case 'SET_SEARCH_IMAGES':
      return ({
        ...state,
        searchImages: action.payload
      })
    case 'SET_GIPHY_IMAGES':
      return ({
        ...state,
        giphyImages: action.payload,
      })
    case 'SET_GIPHY_IMAGES_LOADING_STATUS':
      return ({
        ...state,
        isLoadingImage: action.payload,
      })
    case 'SET_FAV_IMAGES_ID':
      return ({
        ...state,
        favImagesId: action.payload,
      })
    case 'SET_FAV_IMAGES':
      return ({
        ...state,
        favImages: action.payload,
      })
    case 'SET_FAV_IMAGES_LOADING_STATUS':
      return ({
        ...state,
        isFavImageLoading: action.payload,
      })
    default:
      return state;
  }
}

export default userDataList;