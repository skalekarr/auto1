import {
  GET_CAR_DETAILS,
  GET_CAR_DETAILS_SUCCESS,
  GET_CAR_DETAILS_FAILURE
} from '../../action-types';
import reducer, {
  initialState
} from '../details';

describe("reducer", () => {
  it("should return the initialState", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${GET_CAR_DETAILS}`, () => {
    expect(
      reducer(undefined, {
        type: GET_CAR_DETAILS,
        payload: null
      })
    ).toEqual({
      ...initialState,
      meta: {
        ...initialState.meta,
        isLoading: true
      }
    });
  });

  it(`should handle ${
        GET_CAR_DETAILS_SUCCESS
    }`, () => {
    const payload = {}
    expect(
      reducer(undefined, {
        type: GET_CAR_DETAILS_SUCCESS,
        payload
      })
    ).toEqual({
      ...initialState,
      meta: {
        ...initialState.meta,
        isLoading: false
      },
      car: {
        ...initialState.car,
        ...payload
      }
    });
  });

  it(`should handle ${GET_CAR_DETAILS_FAILURE}`, () => {
    expect(
      reducer(undefined, {
        type: GET_CAR_DETAILS_FAILURE,
        payload: null
      })
    ).toEqual({
      ...initialState,
      meta: {
        ...initialState.meta,
        isLoading: false
      }
    });
  });
});