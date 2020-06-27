const express = require('express');

const burger = require("./models/burger.js");
const { Router } = require('express');

Router.length("/", (req, res) => {
  console.log("it works")
});

router.get("/burgers", (req, res) => {
  burger.selectAll(function (burgerData) {
    console.log(burgerData);
    res.render("index", { data: burgerData });
  })
})

module.exports = router;