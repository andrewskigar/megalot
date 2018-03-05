const scrapper = require("osmosis");
const fs = require('fs');
const _ = require('underscore');
const config = require('./config.js');

let megalotResults = [];
let args = process.argv.slice(2);

function scrapeMegalotPageResults(url, onlyLast = true) {
    return new Promise((resolve, reject) => {
        let results = [];
        console.log(url);
        scrapper.get(url)
            .find('div.span10' + (onlyLast ? ':first' : ''))
            .set({
                data: 'div'
            })
            .data(item => {
                let reNumbers = /(\d+),(\d+),(\d+),(\d+),(\d+),(\d+)/;
                let reMega = /: (\d+)/;

                let resultNumbers = item.data.match(reNumbers);
                let resultMega = item.data.match(reMega);

                let tirag = [
                    resultNumbers[1],
                    resultNumbers[2],
                    resultNumbers[3],
                    resultNumbers[4],
                    resultNumbers[5],
                    resultNumbers[6],
                    resultMega[1]
                ];

                results.push(tirag);
            }).done(() => resolve(results));
    });
}

if (args.length === 1 && args[0] === '--all') {
    (async function scrapeMegalotAllResults() {
        for (let i = 1; i <= 122; i++) {
            let url = config.MEGALOT_URL + `/page/${i}`;
            await scrapeMegalotPageResults(url, false).then(results => {
                megalotResults = megalotResults.concat(results);
            });
        };

        fs.writeFile(config.MEGALOT_RESULTS, JSON.stringify(megalotResults), function (err) {
            if (err) throw err;
        });
    })();
} else {
    fs.readFile(config.MEGALOT_RESULTS, (err, data) => {
        if (err) throw err;

        megalotResults = JSON.parse(data);

        (async function scrapeMegalotLastResults() {
            await scrapeMegalotPageResults(config.MEGALOT_URL).then(results => {
                if (!_.isEqual(results[0], megalotResults[0])) {
                    megalotResults = results.concat(megalotResults);
                }
            });

            fs.writeFile(config.MEGALOT_RESULTS, JSON.stringify(megalotResults), function (err) {
                if (err) throw err;
            });
        })();
    });
}








