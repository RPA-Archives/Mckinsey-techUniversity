const filteredList = require('./module.js');

const printing = (path, extension, callback) => {
  filteredList(path, extension, (err, data) => {
    if (err) callback(err.code);
    else {
      data.forEach((element) => {
        callback(element);
      });
    }
  });
};

// module.exports = logger;
printing(process.argv[2], process.argv[3], console.log);
