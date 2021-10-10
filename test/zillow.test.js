const { testElement } = require('domutils');
const zillow = require('../src/zillow');

const ZIP_CODE = '30041';

describe('zillow', () => {
    describe('createUrl', () => {
        test('returns the default URL when given no filter', () => {
            expect(zillow.createUrl(ZIP_CODE)).toBe('something');
        });
    });
});
