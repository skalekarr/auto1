import update from "immutability-helper";
import {
  GET_CARS_LIST,
  GET_CARS_LIST_SUCCESS,
  GET_CARS_LIST_FAILURE
} from '../../action-types';

export const initialState = {
  meta: {
    isLoading: true,
    totalPageCount: 0,
    totalCarsCount: 0,
    currentPage: 1
  },
  cars: []
};

export default function reducer(state = initialState, action) {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case GET_CARS_LIST:
      return update(state, {
        meta: {
          isLoading: {
            $set: true
          }
        }
      });

    case GET_CARS_LIST_SUCCESS: {
      const { data: { totalCarsCount, totalPageCount, cars }, currentPage } = payload;
      return update(state, {
        meta: {
          isLoading: { $set: false },
          totalPageCount: { $set: totalPageCount },
          totalCarsCount: { $set: totalCarsCount },
          currentPage: { $set: currentPage || state.meta.currentPage }
        },
        cars: { $set: cars }
      });
    }

    case GET_CARS_LIST_FAILURE: {
      return update(state, {
        meta: {
          isLoading: {
            $set: false
          }
        }
      });
    }

    default:
      return state;
  }
}
