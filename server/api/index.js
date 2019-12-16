var ApiResponse = require("./ApiResponse");
var User = require("../db/models/User");

module.exports = function (router) {
    router.post("/auth", (req, res) => {
        User.findOne({ username: req.body.username }, (err, doc) => {
            var result = new ApiResponse(200, "");
            if (err || doc == null) {
                result.setFailedStatus(err || "User not found");
            } else {
                result.setContext(doc);
            }
            res.json(result.json());
        });
    });

    router.post("/signup", (req, res) => {
        User.findOne({ username: req.body.username }, { "username": 1 }, (err, doc) => {
            var user = new User(req.body);
            var result = new ApiResponse(200, "");
            if (err) {
                result.setFailedStatus(err);
                res.json(result.json());
            }
            if (doc == null) {
                user.save((err, doc) => {
                    if (err || doc == null) {
                        result.setFailedStatus(err || "User creation failed");
                    }
                    result.setMessage("User created sucessfully, please login.")
                    result.setContext(true);
                    res.json(result.json());
                });
            } else {
                result.setFailedStatus("Username exisits already");
                res.json(result.json());
            }
        });
    });
};