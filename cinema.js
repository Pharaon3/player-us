var request = require('request');

var headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:106.0) Gecko/20100101 Firefox/106.0',
    'Accept': '*/*',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate, br',
    'Referer': 'https://lite-1x0444012.top/zone-static/getZone/liveplayer/v2/vpc/index.html?id=445f3145-0f41-bfde-9a7b-f9678ededff4',
    'Content-Type': 'text/plain;charset=UTF-8',
    'Origin': 'https://lite-1x0444012.top',
    'Connection': 'keep-alive',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'TE': 'trailers'
};

var dataString = '{AppId:3,AppVer:1025,VpcVer:1.0.10,Language:en,Token:,VideoId:' + process.argv[2] + '}';

var options = {
    url: 'https://lite-1x0444012.top/cinema',
    method: 'POST',
    headers: headers,
    gzip: true,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);