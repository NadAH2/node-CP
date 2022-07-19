var fs = require("fs");
var path = require("path");
const file = process.argv[2];
fs.readdir(file, function (err, list) {
  if (err) {
    throw err;
  } else {
    list.forEach(function (file) {
      if (path.extname(file) === "." + process.argv[3]) {
        console.log(file);
      }
    });
  }
});
