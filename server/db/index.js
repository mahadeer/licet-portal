const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect(`${process.env.DB_HOST_ADDRESS}/${process.env.DB_COLLECTION_NAME}`,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database Connected"))
    .catch((err) => console.error(err));

module.exports = mongoose;