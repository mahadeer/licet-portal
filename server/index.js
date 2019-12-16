require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db");

const PORT = process.env.NODE_PORT;
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());
app.use(express.static('public'));

app.get("/", express.static('public'));

var router = express.Router();
require("./api")(router);

app.use("/api", router);

app.get('*', function (req, res) {
    res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(PORT, () => {
    console.log(`${process.env.APP_NAME} Server can be accessed at ${PORT}`);
})