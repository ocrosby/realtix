const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");

// URL of the page we want to scrape
const url = "https://www.zillow.com/schools/316232/denmark-high-school/";

function create_url(zipcode, filter) {
    let url;

    if (filter === 'newest') {

    } else if (filter === 'cheapest') {

    } else {

    }
}

// Async function which scrapes the data
async function scrapeData() {
    try {
        const { data } = await axios.get(url);

        const $ = cheerio.load(data);

        const listItems = $(".")
    } catch (err) {

    }
}

// .photo-cards_extra-attribution li , .list-card-info , #home-detail-lightbox-container , .list-card-img img

// https://www.zillow.com/schools/316232/denmark-high-school/?searchQueryState=%7B%22pagination%22%3A%7B%7D%2C%22mapBounds%22%3A%7B%22west%22%3A-84.79770697447987%2C%22east%22%3A-83.90644110533924%2C%22south%22%3A33.993721227895705%2C%22north%22%3A34.24781544524769%7D%2C%22mapZoom%22%3A11%2C%22schoolId%22%3A316232%2C%22usersSearchTerm%22%3A%22Denmark%20High%20School%22%2C%22isMapVisible%22%3Atrue%2C%22filterState%22%3A%7B%22sch%22%3A%7B%22value%22%3Atrue%7D%2C%22sort%22%3A%7B%22value%22%3A%22globalrelevanceex%22%7D%7D%2C%22isListVisible%22%3Atrue%7D

// https://www.zillow.com/schools/316232/denmark-high-school/

