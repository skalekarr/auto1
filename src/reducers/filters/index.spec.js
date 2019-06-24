import {
  GET_FILTER_COLORS,
  GET_FILTER_COLORS_SUCCESS,
  GET_FILTER_COLORS_FAILURE,
  GET_FILTER_MANUFACTURERS,
  GET_FILTER_MANUFACTURERS_SUCCESS,
  GET_FILTER_MANUFACTURERS_FAILURE,
  SET_FILTERS,
  SET_SORT_ORDER
} from '../../action-types';
import reducer, {
  initialState
} from '../filters';

describe("reducer", () => {
  it("should return the initialState", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${GET_FILTER_COLORS}`, () => {
    expect(
      reducer(undefined, {
        type: GET_FILTER_COLORS,
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

  it(`should handle ${GET_FILTER_MANUFACTURERS}`, () => {
    expect(
      reducer(undefined, {
        type: GET_FILTER_MANUFACTURERS,
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

  it(`should handle ${GET_FILTER_COLORS_SUCCESS}`, () => {
    const payload = { colors: [] }
    expect(
      reducer(undefined, {
        type: GET_FILTER_COLORS_SUCCESS,
        payload
      })
    ).toEqual({
      ...initialState,
      meta: {
        ...initialState.meta,
        isLoading: false
      },
      colors: [
        ...initialState.colors,
        ...payload.colors
      ]
    });
  });

  it(`should handle ${GET_FILTER_MANUFACTURERS_SUCCESS}`, () => {
    const payload = { manufacturers: [] }
    expect(
      reducer(undefined, {
        type: GET_FILTER_MANUFACTURERS_SUCCESS,
        payload
      })
    ).toEqual({
      ...initialState,
      meta: {
        ...initialState.meta,
        isLoading: false
      },
      manufacturers: [
        ...initialState.manufacturers,
        ...payload.manufacturers
      ]
    });
  });

  it(`should handle ${GET_FILTER_COLORS_FAILURE}`, () => {
    expect(
      reducer(undefined, {
        type: GET_FILTER_COLORS_FAILURE,
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

  it(`should handle ${GET_FILTER_MANUFACTURERS_FAILURE}`, () => {
    expect(
      reducer(undefined, {
        type: GET_FILTER_MANUFACTURERS_FAILURE,
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

  it(`should handle ${SET_FILTERS}`, () => {
    const payload = { color: 'blue', manufacturer: 'Volkswagen' };
    expect(
      reducer(undefined, {
        type: SET_FILTERS,
        payload
      })
    ).toEqual({
      ...initialState,
      meta: {
        ...initialState.meta,
        selectedColor: payload.color,
        selectedManufacturer: payload.manufacturer
      }
    });
  });

  it(`should handle ${SET_SORT_ORDER}`, () => {
    const payload = { sortOrder: 'asc' };
    expect(
      reducer(undefined, {
        type: SET_SORT_ORDER,
        payload
      })
    ).toEqual({
      ...initialState,
      meta: {
        ...initialState.meta,
        sortOrder: payload.sortOrder,
      }
    });
  });
});