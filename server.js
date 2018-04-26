var app = require('http').createServer(handler);
var fs = require('fs');
var os = require('os-utils');

function handler (req, res) {
  switch (req.url) {
        case "/css/main.css" :
            res.writeHead(200, {"Content-Type": "text/css"});
            var css = fs.readFileSync('css/main.css', 'utf8');
            res.write(css);
            break;
        case "/app.js" :
            res.writeHead(200, {"Content-Type": "application/javascript"});
            var js = fs.readFileSync('app.js', 'utf8');
            res.write(js);
            break;
        default :    
            res.writeHead(200, {"Content-Type": "text/html"});
            var html = fs.readFileSync('index.html', 'utf8');
            res.write(html);
    };

    res.end();
}

app.listen(8080);
