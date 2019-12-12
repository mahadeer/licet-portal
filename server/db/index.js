const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://127.0.0.1:27017/mean-dev", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database Connected"))
    .catch((err) => console.error(err));

module.exports = mongoose;