import {
  takeEvery
} from "redux-saga/effects";

import {
  GET_CAR_DETAILS
} from '../../action-types'
import {
  handleSuccess,
  handleError
} from "../../utils/redux";
import carsAPI from "../../api-config";

// workers
export function* getCarDetailsAsync({
  payload
}) {
  try {
    const response = yield carsAPI.getCarDetails(payload);
    const {
      status,
      data
    } = response;
    if (status === 200) {
      yield handleSuccess(GET_CAR_DETAILS, data.car);
    }
  } catch (err) {
    const error = {
      ...err.response,
      message: err.message,
    };
    yield handleError(GET_CAR_DETAILS, error);
  }
}

// watchers
export const watchers = [
  function* watchgetCarDetails() {
    yield takeEvery(GET_CAR_DETAILS, getCarDetailsAsync);
  }
];