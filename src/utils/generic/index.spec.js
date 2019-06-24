import { constructQueryString } from './index'

describe('utils', () => {
    it('constructQueryString', () => {
        const payload = { page: 1, color: 'blue', manufacturer: 'Volkswagen'};
        const expectedQueryString = '?page=1&color=blue&manufacturer=Volkswagen'
        expect(constructQueryString(payload)).toEqual(expectedQueryString);
    });
})