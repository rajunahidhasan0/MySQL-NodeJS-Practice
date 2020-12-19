const express = require('express');
const mysql = require('mysql');

//Create connection
const db = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : '' 
});

//connect
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('Mysql Connected...')
});

const app = express();

//create DB
app.get('/createdb' ,(req,res)=>{
    let sql = 'CREATE DATABASE nodemysql2';
    db.query(sql, (err, result)=>{
        if(err)throw err;
        console.log(result);
        res.send('Database created...');
    });
});

app.listen('3000', () => {
    console.log('Server started on port 3000');
});