import * as ActionTypes from '../../../src/actions/index';
import * as reducers from '../../../src/reducers/index';

describe('Restaurants Reducers', () => {
  describe('testing isPurgeSingleSuccessful reducer', () => {
    it('should handle RECEIVE_RESTAURANTS', () => {
      expect(reducers.restaurants({}, {
        type: ActionTypes.RECEIVE_RESTAURANTS,
        payload: {
          listOfRestaurants: []
        }
      })).toEqual([]);
    });
  });
});