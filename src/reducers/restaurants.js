import {
  REQUEST_RESTAURANTS,
  RECEIVE_RESTAURANTS,
} from '../actions/index'

const restaurants = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      return Object.assign({},state,
        {
          listOfRestaurants: action.listOfRestaurants,
        })
    default:
      return state
  }
}

export const isFetchingList = (state = true, reduxAction) => {2
  if (reduxAction.type === ActionTypes.REQUEST_RESTAURANTS) {
    return reduxAction.payload.isFetching;
  }
  return state;
};

export default restaurants
