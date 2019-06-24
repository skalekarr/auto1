import { combineReducers } from "redux";

import carsList from "./list";
import carDetails from "./details";
import filters from './filters';

export const rootReducer = combineReducers({
    carsList,
    carDetails,
    filters
});