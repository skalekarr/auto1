import {
    GET_CARS_LIST,
    GET_CARS_LIST_SUCCESS,
    GET_CARS_LIST_FAILURE
  } from '../../action-types';
  import reducer, {
    initialState
  } from '../list';
  
  describe("reducer", () => {
    it("should return the initialState", () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });
  
    it(`should handle ${GET_CARS_LIST}`, () => {
      expect(
        reducer(undefined, {
          type: GET_CARS_LIST,
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
  
    it(`should handle ${GET_CARS_LIST_SUCCESS}`, () => {
      const payload = { 
        data: { totalCarsCount: 1, totalPageCount: 1, cars: [] }, currentPage: 1
      };
      expect(
        reducer(undefined, {
          type: GET_CARS_LIST_SUCCESS,
          payload
        })
      ).toEqual({
        ...initialState,
        meta: {
          ...initialState.meta,
          isLoading: false,
          totalPageCount: payload.data.totalPageCount,
          totalCarsCount: payload.data.totalCarsCount,
          currentPage: payload.currentPage
        },
        cars: payload.data.cars
      });
    });
  
    it(`should handle ${GET_CARS_LIST_FAILURE}`, () => {
      expect(
        reducer(undefined, {
          type: GET_CARS_LIST_FAILURE,
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