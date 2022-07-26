var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database : "ppl"
});

//=> cek koneksi database
con.connect(function(error) {
  if (error) throw error;
  console.log("Connected!");
});

// => membuat database
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE ppl", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
// });

// => membuat tabel
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE customer (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(50), address VARCHAR(50))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
// });


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customer(name, address) VALUES ('pt testing lagi', 'jalan jlan bersama')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});



// => filter data
// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM customer WHERE name = 'pt mencari cinta sejati'", function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

// -> drop item
// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "DELETE FROM customer WHERE name = 'pt testing'";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Number of records deleted: " + result.affectedRows);
//     });
//   });

// -> update
// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "UPDATE customer SET name = 'pt indomie' WHERE name = 'pt coba'";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result.affectedRows + " record(s) updated");
//     });
//   });