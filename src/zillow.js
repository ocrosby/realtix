const axios = require('axios');

function createUrl(zipcode, filter) {
    let url;
    
    if (filter === 'newest') {
        url = `https://www.zillow.com/homes/for_sale/${zipcode}/0_singlestory/days_sort`;
    } else if (filter === 'cheapest') {
        url = `https://www.zillow.com/homes/for_sale/${zipcode}/0_singlestory/pricea_sort/`;
    } else {
        url = `https://www.zillow.com/homes/for_sale/${zipcode}_rb/?fromHomePage=true&shouldFireSellPageImplicitClaimGA=false&fromHomePageTab=buy`;
    }

    return url;
}

function getHeaders() {
    return {'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'accept-encoding': 'gzip, deflate, sdch, br',
    'accept-language': 'en-GB,en;q=0.8,en-US;q=0.6,ml;q=0.4',
    'cache-control': 'max-age=0',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36'};
}

async function getResponse(url) {
    const response = await axios.get(url, {
        headers: getHeaders()
      });

    return response;
}

async function getData(zipcode, filter) {
    const url = createUrl(zipcode, filter);
    const response = getResponse(url);
    
}

exports.createUrl = createUrl;
exports.getHeaders = getHeaders;
exports.getResponse = getResponse;