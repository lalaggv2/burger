const connection = require("./connection");

const orm = {
  selectWhere: function (tableInput, colToSearch, valOfCol) {
    return new Promise((resolve, reject) => {
      var queryString = 'SELECT * FROM ?? WHERE ?? = ?';

      connection.query(
        queryString,
        [tableInput, colToSearch, valOfCol],
        function (err, result) {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  },
  selectAll: function (tableInput) {
    return new Promise((resolve, reject) => {
      var queryString = 'SELECT * FROM burgers';

      connection.query(
        queryString, [tableInput],
        function (err, result) {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  },

  create: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  update: function (table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  delete: function (table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

};

// insertOne()


// updateOne()



module.exports = orm;

