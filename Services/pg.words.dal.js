
// set constants
const dal = require("./word_db");

// GET random silly word and its definition
var getWord= function() {
    if(DEBUG) console.log("games.pg.dal.getWord()");
    return new Promise(function(resolve, reject) {
      const sql = "SELECT name, definition FROM silly_words ORDER BY RANDOM() LIMIT 1;"
      dal.query(sql, [], (err, result) => {
        if (err) {
          if(DEBUG) console.log(err);
          reject(err);
        } else {
          resolve(result.rows);
        }
      }); 
    }); 
  };

// export modules
module.exports = {
    getWord
  }