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
};

selectAll()
insertOne()
updateOne()


module.exports = orm;

