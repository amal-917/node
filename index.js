const fs = require("fs");
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/overview" || pathName === "/") {
    res.end("<h1>This is the overview</h1>");
  } else if (pathName === "/product") {
    res.end("This is the product page");
  } else if (pathName === "/api") {
    // console.log(__dirname);
    fs.readFile(`${__dirname}/txt/data.json`, "utf-8", (err, data) => {
      const productData = JSON.parse(data);

      res.writeHead(200, { "Content-type": "application/json" });
      res.end(productData);
    });
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello world",
    });
    res.end("<h1>Page Not Found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port: 8000");
});
