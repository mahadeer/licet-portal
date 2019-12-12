const express = require("express");
const app = express();
const db = require("./db");

const PORT = 3000;
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server can be accessed at ${PORT}`)
})