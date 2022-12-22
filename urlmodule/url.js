const http = require("http");
const fs = require("fs");
// const { type } = require("os");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("This is default page");
    } else if (req.url == "/about") {
        res.end("This is about page");
    } else if (req.url == "/contact") {
        res.write("This is contact page") //can be written in this way too
        res.end()
    }
    else if (req.url == "/userAPI") {
        fs.readFile(`/home/faizanshaikh/Desktop/Day15/UserAPI/userAPI.json`, "utf-8", (err, data) => {
            console.log(data);
            // const objData = JSON.parse(data);  will show a specific pair value of an object
            // res.end(objData[0].name)
            res.writeHead(200, {"content-Type":"Application/JSON"})
            res.end(data);
        })
    } else {
        res.writeHead(404, { "content-type": "text/html" }); // will show status error 404
        res.end("<h1>ERROR 404</h1>")
    }
});
server.listen(4000, () => {
    console.log("listening at port 4000")
})