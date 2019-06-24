import { all } from "redux-saga/effects";
import createMiddlewareSaga from "redux-saga";

import { watchers as carsList } from "./list";
import { watchers as carDetails } from "./details";
import { watchers as filters } from './filters';

const transform = watchers => watchers.map(watcher => watcher());

export const middlewareSaga =
  typeof createMiddlewareSaga === "function"
    ? createMiddlewareSaga()
    : createMiddlewareSaga.default();

export function* rootSaga() {
  yield all([
    ...transform(carDetails),
    ...transform(carsList),
    ...transform(filters)
  ]);
}
