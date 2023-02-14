const express = require("express");
const http = require("http");
require("./db/connection")
const router = require("./api/emp/index");
const employee = require("./api/emp/model")

const app = express()
const server = http.createServer(app)
const ip = process.env.IP || '0.0.0.0';
const port = process.env.PORT || 9000;

app.use(express.json())
app.use(router)

setImmediate(()=>{
    server.listen(port, ip, ()=>{
        console.log('Express Server Listening on http://%s:%d', ip, port);
    })
})