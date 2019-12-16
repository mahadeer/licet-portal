module.exports = function (router) {
    router.post("/api/auth", (req, res) => {
        res.json({ message: req.username });
    });
};