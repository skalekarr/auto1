import {
    GET_CARS_LIST,
    GET_CAR_DETAILS,
    GET_FILTER_COLORS,
    GET_FILTER_MANUFACTURERS,
    SET_FILTERS,
    SET_SORT_ORDER,
} from '../action-types';

import * as actions from './index'

describe('actions', () => {
    it('getCarsList', () => {
        const payload = {}
        expect(actions.getCarsList(payload)).toEqual({
            type: GET_CARS_LIST,
            payload
        });
    });

    it('getCarDetails', () => {
        const payload = {}
        expect(actions.getCarDetails(payload)).toEqual({
            type: GET_CAR_DETAILS,
            payload
        });
    });

    it('getFilterColors', () => {
        expect(actions.getFilterColors()).toEqual({
            type: GET_FILTER_COLORS,
        });
    });

    it('getFilterManufacturers', () => {
        expect(actions.getFilterManufacturers()).toEqual({
            type: GET_FILTER_MANUFACTURERS,
        });
    });

    it('should have setFilters', () => {
        const payload = {}
        expect(actions.setFilters(payload)).toEqual({
            type: SET_FILTERS,
            payload
        });
    });

    it('should have setSortOrder', () => {
        const sortOrder = 'asc'
        expect(actions.setSortOrder(sortOrder)).toEqual({
            type: SET_SORT_ORDER,
            payload: { sortOrder }
        });
    });
})