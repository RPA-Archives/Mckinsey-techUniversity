const http = require('http');

const request = (url, call) => {
  http.get(url, (response) => {
    response.setEncoding('utf-8');

    response.on('data', (data) => {
      // console.log(data);
      call('Ok');
    });
  }).on('error', () => { call('Error'); });
};
module.exports = request;

// request(process.argv[2], console.log);
