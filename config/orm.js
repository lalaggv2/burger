const connection = require("./connection");

//Helper function to create the question marks to relate to the db
function createQuestionMarks(num) {
  // create an empty array
  var arr = [];
  // loop through the keys and push question marks into array
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}
// Helper function to convert object key/value pairs to SQL syntax
function objToSql(obj) {
  var arr = [];
  for (var key in obj) {
    var value = obj[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(obj, key)) {
      // if string with spaces, add quotations
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      //This part will transform user input into strings like this {name: 'Bacon Burger'} => ["name='Bacon Burger'"] and
      // {devoured: true} => ["devoured=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}
//Helper fun

const orm = {
  selectAll: function (table, callback) {
    //return new Promise((resolve, reject) => {
    var queryString = "SELECT * FROM " + table + ";";

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  //I was trying to work with promises, but discovered I don't really get them completely so I reverted back to callbacks
  // selectAll: function (tableInput) {
  //   return new Promise((resolve, reject) => {
  //     var queryString = 'SELECT * FROM burgers';

  //     connection.query(
  //       queryString, [tableInput],
  //       function (err, result) {
  //         if (err) {
  //           reject(err);
  //         }
  //         resolve(result);
  //       }
  //     );
  //   });
  // },

  insertOne: function (table, cols, vals, callback) {
    var queryString =
      "INSERT INTO " +
      table +
      " (" +
      cols.toString() +
      ") " +
      "VALUES (" +
      createQuestionMarks(vals.length) +
      ") ";

    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }

      callback(result);
    });
  },

  updateOne: function (table, objColVals, condition, callback) {
    var queryString = "UPDATE " + table;
    //This is another way to do it, recalling the variable and adding more to it.
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  deleteOne: function (table, condition, callback) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
};

module.exports = orm;
