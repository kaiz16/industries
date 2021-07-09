const fs = require("fs");

let data = fs.readFileSync("industries.txt");
data
  .toString()
  .split("\n")
  .forEach(function (line, index, arr) {
    if (index === arr.length - 1 && line === "") {
      return;
    }
    let str = `INSERT INTO public.industry(industry) VALUES('${line}');\n`
    fs.appendFile('industries.sql', str, function (err) {
        if (err) throw err;
        console.log('Updated!');
      });
  });

