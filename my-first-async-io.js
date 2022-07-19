const fs = require("fs");
const file = process.argv[2];
const files = fs.readFile(file, function (err, data) {
  if (err) {
    throw err;
  } else {
    console.log(data.toString().split("\n").length - 1);
  }
});
