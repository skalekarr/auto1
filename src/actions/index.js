import {
  GET_CARS_LIST,
  GET_CAR_DETAILS,
  GET_FILTER_COLORS,
  GET_FILTER_MANUFACTURERS,
  SET_FILTERS,
  SET_SORT_ORDER
} from '../action-types';

export const getCarsList = params => ({
  type: GET_CARS_LIST,
  payload: params
});

export const getCarDetails = stockNumber => ({
  type: GET_CAR_DETAILS,
  payload: stockNumber
});

export const getFilterColors = () => ({
  type: GET_FILTER_COLORS
});

export const getFilterManufacturers = () => ({
  type: GET_FILTER_MANUFACTURERS,
});

export const setFilters = payload => ({
  type: SET_FILTERS,
  payload
});

export const setSortOrder = sortOrder => ({
  type: SET_SORT_ORDER,
  payload: {
    sortOrder
  }
});