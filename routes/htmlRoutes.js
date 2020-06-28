const path = require("path");
const router = require("express").Router();

//Import the burger model to use the database
const burger = require("../models/burger.js");
// router.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// // All other routes respond with the index.html file
// router.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

router.get("/", (req, res) => {
  burger.selectAll(function (burgerData) {
    console.log(burgerData);
    res.render("index", { data: burgerData });
  });
});


module.exports = router;