// Create web server
// 1. Create a web server
// 2. Create a route for the home page
// 3. Create a route for the comments page
// 4. Create a route for the add comment page
// 5. Create a route for the 404 page
// 6. Start the web server

// 1. Create a web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var ROOT_DIR = "html/";

http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true, false); // true: query string
    console.log(JSON.stringify(urlObj));
    console.log("URL path " + urlObj.pathname);
    console.log("URL search " + urlObj.search);
    console.log("URL query " + urlObj.query["q"]);

    // 2. Create a route for the home page
    if (urlObj.pathname === "/") {
        // Read the file
        fs.readFile(ROOT_DIR + "index.html", function (err, data) {
            // Send the HTTP response
            res.writeHead(200);
            res.end(data);
        });
    }

    // 3. Create a route for the comments page
    else if (urlObj.pathname === "/comments") {
        // Read the file
        fs.readFile(ROOT_DIR + "comments.html", function (err, data) {
            // Send the HTTP response
            res.writeHead(200);
            res.end(data);
        });
    }

    // 4. Create a route for the add comment page
    else if (urlObj.pathname === "/addcomment") {
        // Read the file
        fs.readFile(ROOT_DIR + "addComment.html", function (err, data) {
            // Send the HTTP response
            res.writeHead(200);
            res.end(data);
        });
    }

    // 5. Create a route for the 404 page
    else {
        // Read the file
        fs.readFile(ROOT_DIR + "404.html", function (err, data) {
            // Send the HTTP response
            res.writeHead(404);
            res.end(data);
        });
    }
}).listen(80);

console.log('Server is running at http://localhost:80');