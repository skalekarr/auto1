import axios from "axios";
import {
  call
} from "redux-saga/effects";

const axiosDefaults = {
  headers: {
    "Content-Type": "application/json"
  },
};
const axiosConfig = axios.create({
  ...axiosDefaults,
  timeout: 90000
});

// Methods
const GET = axiosConfig.get;
const apiBase = 'http://localhost:3001';

const api = {
  getCarsList: queryString =>
    call(
      GET,
      `${apiBase}/cars${queryString}`
    ),
  getCarDetails: stockNumber =>
    call(
      GET,
      `${apiBase}/cars/${stockNumber}`
    ),
  getFilterColors: () =>
    call(
      GET,
      `${apiBase}/colors`
    ),
  getFilterManufacturers: () =>
    call(
      GET,
      `${apiBase}/manufacturers`
    ),
};

export default api;