const express = require('express');
const mysql = require('mysql');

//Create connection
const db = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : '',
   database: 'nodemysql'
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
 
//create table
app.get('/createpoststable', (req, res) =>{
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql,(err, result) => {
        if(err)throw err;
        console.log(result);
        res.send('Posts table created...');
    });
});

// Insert post 1
app.get('/addpost1',(req, res)=>{
    let post={title:'Post One', body:'This is post number 1'};
    let sql='INSERT INTO posts SET ?';
    let query=db.query(sql,post,(err, result) => {
        if(err)throw err;
        console.log(result);
        res.send('Post 1 added...');
    });
});

// Insert post 2
app.get('/addpost2',(req, res)=>{
    let post={title:'Post Two', body:'This is post number 2'};
    let sql='INSERT INTO posts SET ?';
    let query=db.query(sql,post,(err, result) => {
        if(err)throw err;
        console.log(result);
        res.send('Post 2 added...');
    });
});

// Select posts
app.get('/getposts',(req, res)=>{
    let sql = 'SELECT * FROM posts';
    let query=db.query(sql,(err, results) => {
        if(err)throw err;
        console.log(results);
        res.send('Records(posts) Fetched...');
    });
});

// Select single post
app.get('/getpost/:id',(req, res)=>{
    let sql = 'SELECT * FROM posts WHERE id = ${req.param.id}';
    let query=db.query(sql,(err, result) => {
        if(err)throw err;
        console.log(result);
        res.send('Single Record(post) Fetched...');
    });
});

app.listen('3000', () => {
    console.log('Server started on port 3000');
});