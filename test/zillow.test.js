const { expect } = require('chai');
const { testElement } = require('domutils');
const zillow = require('../src/zillow');

const ZIP_CODE = '30041';

describe('zillow', () => {
    describe('createUrl', () => {
        test('returns the default URL when given no filter', () => {
            const expected = `https://www.zillow.com/homes/for_sale/${ZIP_CODE}_rb/?fromHomePage=true&shouldFireSellPageImplicitClaimGA=false&fromHomePageTab=buy`;
            const actual = zillow.createUrl(ZIP_CODE);

            expect(actual).to.equal(expected);
        });

        test('returns the cheapest URL when given the filter "cheapest"', () => {
            const expected = `https://www.zillow.com/homes/for_sale/${ZIP_CODE}/0_singlestory/pricea_sort/`;
            const actual = zillow.createUrl(ZIP_CODE, 'cheapest');

            expect(actual).to.equal(expected);            
        });

        test('returns the newest URL when given the filter "newest"', () => {
            const expected = `https://www.zillow.com/homes/for_sale/${ZIP_CODE}/0_singlestory/days_sort`;
            const actual = zillow.createUrl(ZIP_CODE, 'newest');

            expect(actual).to.equal(expected);
        });
    });

    describe('getHeaders', () => {
        test('returns the expected headers', () => {
            const headers = zillow.getHeaders();

            expect(headers.accept).to.equal('text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8');
            expect(headers['accept-encoding']).to.equal('gzip, deflate, sdch, br');
            expect(headers['accept-language']).to.equal('en-GB,en;q=0.8,en-US;q=0.6,ml;q=0.4');
            expect(headers['cache-control']).to.equal('max-age=0');
            expect(headers['upgrade-insecure-requests']).to.equal('1');
            expect(headers['user-agent']).to.equal('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36');            
        });
    });
});
