import {
  takeEvery
} from "redux-saga/effects";
import {
  cloneableGenerator
} from "@redux-saga/testing-utils";
import {
  GET_CARS_LIST,
  GET_CARS_LIST_SUCCESS,
  GET_CARS_LIST_FAILURE
} from '../../action-types';
import { constructQueryString } from '../../utils/generic';


import carsAPI from "../../api-config";

import {
  getCarsListAsync,
  watchers
} from "./index";

describe("List sagas", () => {
  const serverError = {
    config: {},
    request: {},
    response: {
      config: {},
      data: "",
      headers: {},
      request: {},
      status: 500,
      statusText: "internal server error"
    },
    message: "",
    stack: ""
  };

  describe("getCarDetails", () => {
    const args = {
      payload: {
        page: 1,
        sort: 'asc'
      },
    };
    const generator = cloneableGenerator(getCarsListAsync)(
      args
    );

    const getCarDetails = jest.spyOn(
      carsAPI,
      "getCarsList"
    );

    const response = {
      data: {},
      status: 200,
    };

    describe("on API calls", () => {
      generator.next();
      it("should invoke getCarDetails", () => {
        expect(getCarDetails).toHaveBeenCalledWith(constructQueryString(args.payload));
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

      it(`should invoke ${GET_CARS_LIST_SUCCESS}`, () => {
        expect(action).toEqual(GET_CARS_LIST_SUCCESS);
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

      it(`should invoke ${GET_CARS_LIST_FAILURE}`, () => {
        expect(action).toEqual(GET_CARS_LIST_FAILURE);
      });

      it("should have a Server error message", () => {
        expect(status).toEqual(serverError.response.status);
        expect(statusText).toEqual(serverError.response.statusText);
      });
    });

    describe("watchers", () => {
      const watchGetCarsListAsync = watchers[0];
      const generatorWatcher = cloneableGenerator(
        watchGetCarsListAsync
      )();
      describe("when action GET_CAR_DETAILS is dispatched", () => {
        it("should invoke getCarDetailsAsync", () => {
          expect(generatorWatcher.next().value).toEqual(
            takeEvery(
              GET_CARS_LIST,
              getCarsListAsync
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