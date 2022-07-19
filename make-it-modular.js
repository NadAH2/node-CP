var path = require("path");
var mymodule = require("./mymodule.js");
var directory = process.argv[2];
var filterExt = process.argv[3];
mymodule(directory, filterExt, function (err, list) {
  if (err) {
    throw err;
  } else {
    list.forEach(function (file) {
      console.log(file);
    });
  }
});
