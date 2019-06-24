import {
    takeEvery
} from "redux-saga/effects";

import {
    GET_FILTER_COLORS,
    GET_FILTER_MANUFACTURERS
} from '../../action-types'
import {
    handleSuccess,
    handleError
} from "../../utils/redux";
import carsAPI from '../../api-config';

// workers
export function* getFilterColors() {
    try {
        const response = yield carsAPI.getFilterColors();
        const { status, data } = response;
        if (status === 200) {
            yield handleSuccess(GET_FILTER_COLORS, data);
        }
    } catch (err) {
        const error = {
            ...err.response,
            message: err.message,
        };
        yield handleError(GET_FILTER_COLORS, error);
    }
}

// workers
export function* getFilterManufacturers() {
    try {
        const response = yield carsAPI.getFilterManufacturers();
        const { status, data } = response;
        if (status === 200) {
            yield handleSuccess(GET_FILTER_MANUFACTURERS, data);
        }
    } catch (err) {
        const error = {
            ...err.response,
            message: err.message,
        };
        yield handleError(GET_FILTER_MANUFACTURERS, error);
    }
}

// watchers
export const watchers = [
    function* watchGetFilterColors() {
        yield takeEvery(GET_FILTER_COLORS, getFilterColors);
    },
    function* watchGetFilterManufacturers() {
        yield takeEvery(GET_FILTER_MANUFACTURERS, getFilterManufacturers);
    },
];
