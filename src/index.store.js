import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import { rootReducer } from "./reducers";
import { rootSaga, middlewareSaga } from "./sagas";

const createStoreWithMiddleware = () => {
  return applyMiddleware(middlewareSaga, createLogger());
};

const middleware = createStoreWithMiddleware();

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, middleware);
  middlewareSaga.run(rootSaga);
  return store;
}

export const store = configureStore();