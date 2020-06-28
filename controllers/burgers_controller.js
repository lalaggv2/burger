const express = require("express");
const router = express.Router();

//Import the burger model to use the database
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.selectAll(function (bData) {
    //console.log(bData);
    res.render("index", { burgers: bData });
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function (result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.updateOne({ devoured: req.body.devoured }, condition, function (
    result
  ) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.deleteOne(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

//Export so it can be used by other files
module.exports = router;
