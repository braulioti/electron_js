let request = require('request');

request('https://quotesondesign.com/wp-json/wp/v2/posts?orderby=rand&per_page=1', function(err, response, body) {
    console.log(err);
    let bodyJson = JSON.parse(body);
    let randomQuote = bodyJson[0]['content']['rendered'];
    document.getElementById('quote').innerHTML = randomQuote;
});

setInterval(function () {
    request('https://quotesondesign.com/wp-json/wp/v2/posts?orderby=rand&per_page=1&order=desc', function(err, response, body) {
        console.log(err);
        let bodyJson = JSON.parse(body);
        let randomQuote = bodyJson[0]['content']['rendered'];
        document.getElementById('quote').innerHTML = randomQuote;
    });
}, 5000);
