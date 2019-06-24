import { takeEvery } from "redux-saga/effects";

import { GET_CARS_LIST } from '../../action-types';
import { handleSuccess, handleError } from "../../utils/redux";
import { constructQueryString } from '../../utils/generic';
import carsAPI from '../../api-config';

// workers
export function* getCarsList({ payload }) {
  try {
    const queryString = constructQueryString(payload);
    const response = yield carsAPI.getCarsList(queryString);
    const { data, status } = response;
    if (status === 200) {
      yield handleSuccess(GET_CARS_LIST, {data, currentPage: payload.page});
    }
  } catch (err) {
    const error = {
      ...err.response,
      message: err.message,
    };
    yield handleError(GET_CARS_LIST, error);
  }
}

// watchers
export const watchers = [
  function* watchGetCarsList() {
    yield takeEvery(GET_CARS_LIST, getCarsList);
  }
];
