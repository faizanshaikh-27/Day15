// http.createServer() methods includes request and response parameters which is supplied by nodejs
// The request object can be used to get information about current http request. eg request, url, header and data.
// The response object can be used to send a response for current http request.


const http = require("http");
console.log(http);

const server = http.createServer((req, res) => {
    // console.log(req.url);
    res.end("This is a response from http module");
});

const newServer = http.createServer((req, res) => {
    res.end("This is another http create server module");
});
server.listen(3000, () => {
    console.log("listening on port 3000");
});
newServer.listen(8000, () => {
    console.log("listening at port 8000")
});