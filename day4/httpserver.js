const http = require("http")
require("dotenv").config()
// const port = 3000;
// process.env.PORT 
const port = process.env.PORT || 3000 ;
const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url == "/"){
        res.end("<h1> This is Rishi Patodiya </h1><i> Welcome to the developer world!</i>");
    }
    else if(req.url == "/home"){
        res.end("<h1> This is Home Page </h1>");
    }
    res.statusCode = 200;
    // res.setHeader('content-type', 'text/html')
})

server.listen(port, () => {
    console.log(`server is listining on port : ${port}`)
}) 