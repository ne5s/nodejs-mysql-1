var mysql = require('mysql');
var db = mysql.createConnection({
    host:'',
    user:'',
    password:'',
    database:''
  });
  db.connect();
  
  // 꺼내놓을 API가 1개라면
  module.exports = db;
  //여러개라면
  // exports 만 씀