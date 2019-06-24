import { put } from "redux-saga/effects";

export function* handleSuccess(type, response) {
  const successAction = (type, payload) => ({
    type: `${type}_SUCCESS`,
    payload
  });
  yield put(successAction(type, response));
}

export function* handleError(type, error) {
  const errorAction = (type, payload) => ({
    type: `${type}_FAILURE`,
    payload
  });
  yield put(errorAction(type, error));
}
