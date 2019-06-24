import update from "immutability-helper";
import {
    GET_CAR_DETAILS,
    GET_CAR_DETAILS_SUCCESS,
    GET_CAR_DETAILS_FAILURE
} from '../../action-types';

export const initialState = {
  meta: {
    isLoading: true,
  },
  car: {}
};

export default function reducer(state = initialState, action) {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case GET_CAR_DETAILS:
      return update(state, {
        meta: {
          isLoading: {
            $set: true
          }
        }
      });

    case GET_CAR_DETAILS_SUCCESS: {
      return update(state, {
        meta: {
          isLoading: {
            $set: false
          }
        },
        car: { $set: {...payload}}
      });
    }

    case GET_CAR_DETAILS_FAILURE: {
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
