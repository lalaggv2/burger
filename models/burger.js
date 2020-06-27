const orm = require("../config/orm.js");

//const orm = require('orm');

orm.selectAll().then((data) => {
  console.log(data);
});

// insertOne();
// updateOne();

// module.exports = burger;