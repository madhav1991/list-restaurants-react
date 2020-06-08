import fetch from 'cross-fetch'

export const REQUEST_RESTAURANTS = 'REQUEST_RESTAURANTS'
export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS'

const requestRestaurants= isFetching => ({
    type: REQUEST_RESTAURANTS,
    payload: isFetching,
});

function receiveRestaurants(city, json) {
  return {
    type: RECEIVE_RESTAURANTS,
    listOfRestaurants: json.restaurants,
  }
}

export function fetchRestaurants(city) {
  return dispatch => {
    dispatch(requestRestaurants(true))
    return fetch(`http://opentable.herokuapp.com/api/restaurants?city=${city}`)
      .then(response => response.json())
      .then(json => dispatch(receiveRestaurants(city, json)))
      .finally(requestRestaurants(false))
  }
}