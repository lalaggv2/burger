const router = require("express").Router();

// we require the dbconnection file so that we can access the connection oobject that we established
// this allows us to call "connection.query(...)" anyhere the connection has been required.
// const connection = require('../db/dbConnection')

// router in this case is behaving the same as it has throughout the route tree, however we are now at the endpoints that will bit hit with browser requests
// instead of calling "router.USE(...)" we will be calling "router.get(..)", replacing "get" with whichever http verb is relevant (post, delete, etc.)
// router.get("/all", function(req, res) {
//   const query = "SELECT * FROM users"
//   connection.query(query, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   })
// });

router.post("/api/burgers", function (req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/cats/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  cat.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;