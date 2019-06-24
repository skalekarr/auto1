import {
  takeEvery
} from "redux-saga/effects";
import {
  cloneableGenerator
} from "@redux-saga/testing-utils";
import {
  GET_FILTER_COLORS,
  GET_FILTER_COLORS_SUCCESS,
  GET_FILTER_COLORS_FAILURE,
  GET_FILTER_MANUFACTURERS,
  GET_FILTER_MANUFACTURERS_SUCCESS,
  GET_FILTER_MANUFACTURERS_FAILURE
} from '../../action-types'

import carsAPI from "../../api-config";

import {
  getFilterColorsAsync,
  getFilterManufacturersAsync,
  watchers
} from "./index";

describe("Filters sagas", () => {
  const serverError = {
    config: {},
    request: {},
    response: {
      config: {},
      data: "",
      headers: {},
      request: {},
      status: 200,
      statusText: "internal server error"
    },
    message: "",
    stack: ""
  };

  describe("getFilterColorsAsync", () => {
    const generator = cloneableGenerator(getFilterColorsAsync)();

    const getFilterColors = jest.spyOn(
      carsAPI,
      "getFilterColors"
    );

    const response = {
      data: {},
      status: 200,
    };

    describe("on API calls", () => {
      generator.next();
      it("should invoke getFilterColors", () => {
        expect(getFilterColors).toHaveBeenCalledWith();
      });
    });

    describe("when response is successful", () => {
      const clone = generator.clone();
      const cloneSuccess = clone.next(response);

      const invokedSuccess = cloneSuccess.value.next();
      const result = JSON.parse(JSON.stringify(invokedSuccess)).value.payload
        .action;
      const {
        type: action
      } = result;

      it(`should invoke ${GET_FILTER_COLORS_SUCCESS}`, () => {
        expect(action).toEqual(GET_FILTER_COLORS_SUCCESS);
      });

      it("should finish all calls", () => {
        expect(clone.next().done).toEqual(true);
      });
    });

    describe("should handle exception as expected", () => {
      const clone = generator.clone();
      const cloneError = clone.throw(serverError);

      it("should call handleError", () => {
        expect(cloneError.done).toEqual(false);
      });

      const invokedError = cloneError.value.next();
      const result = JSON.parse(JSON.stringify(invokedError)).value.payload
        .action;
      const {
        type: action,
        payload: {
          status,
          statusText
        }
      } = result;

      it(`should invoke ${GET_FILTER_COLORS_FAILURE}`, () => {
        expect(action).toEqual(GET_FILTER_COLORS_FAILURE);
      });

      it("should have a Server error message", () => {
        expect(status).toEqual(serverError.response.status);
        expect(statusText).toEqual(serverError.response.statusText);
      });
    });

    describe("watchers", () => {
      const watchGetFilterColorsAsync = watchers[0];
      const generatorWatcher = cloneableGenerator(
        watchGetFilterColorsAsync
      )();
      describe(`when action ${GET_FILTER_COLORS} is dispatched`, () => {
        it("should invoke getFilterColorsAsync", () => {
          expect(generatorWatcher.next().value).toEqual(
            takeEvery(
              GET_FILTER_COLORS,
              getFilterColorsAsync
            )
          );
        });
        it("should be done with the calls", () => {
          expect(generatorWatcher.next().done).toEqual(true);
        });
      });
    });
  });

  describe("getFilterManufacturersAsync", () => {
    const generator = cloneableGenerator(getFilterManufacturersAsync)();

    const getFilterManufacturers = jest.spyOn(
      carsAPI,
      "getFilterManufacturers"
    );

    const response = {
      data: {},
      status: 200,
    };

    describe("on API calls", () => {
      generator.next();
      it("should invoke getFilterManufacturers", () => {
        expect(getFilterManufacturers).toHaveBeenCalledWith();
      });
    });

    describe("when response is successful", () => {
      const clone = generator.clone();
      const cloneSuccess = clone.next(response);

      const invokedSuccess = cloneSuccess.value.next();
      const result = JSON.parse(JSON.stringify(invokedSuccess)).value.payload
        .action;
      const {
        type: action
      } = result;

      it(`should invoke ${GET_FILTER_MANUFACTURERS_SUCCESS}`, () => {
        expect(action).toEqual(GET_FILTER_MANUFACTURERS_SUCCESS);
      });

      it("should finish all calls", () => {
        expect(clone.next().done).toEqual(true);
      });
    });

    describe("should handle exception as expected", () => {
      const clone = generator.clone();
      const cloneError = clone.throw(serverError);

      it("should call handleError", () => {
        expect(cloneError.done).toEqual(false);
      });

      const invokedError = cloneError.value.next();
      const result = JSON.parse(JSON.stringify(invokedError)).value.payload
        .action;
      const {
        type: action,
        payload: {
          status,
          statusText
        }
      } = result;

      it(`should invoke ${GET_FILTER_MANUFACTURERS_FAILURE}`, () => {
        expect(action).toEqual(GET_FILTER_MANUFACTURERS_FAILURE);
      });

      it("should have a Server error message", () => {
        expect(status).toEqual(serverError.response.status);
        expect(statusText).toEqual(serverError.response.statusText);
      });
    });

    describe("watchers", () => {
      const watchGetFilterManufacturersAsync = watchers[1];
      const generatorWatcher = cloneableGenerator(
        watchGetFilterManufacturersAsync
      )();
      describe(`when action ${GET_FILTER_COLORS} is dispatched`, () => {
        it("should invoke getFilterColorsAsync", () => {
          expect(generatorWatcher.next().value).toEqual(
            takeEvery(
              GET_FILTER_MANUFACTURERS,
              getFilterManufacturersAsync
            )
          );
        });
        it("should be done with the calls", () => {
          expect(generatorWatcher.next().done).toEqual(true);
        });
      });
    });
  });
});