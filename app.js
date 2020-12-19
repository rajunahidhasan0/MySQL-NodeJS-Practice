const express = require('express');
const mysql = require('mysql');

const app = express();

app.listen('3306', () => {
    console.log('Server started on port 3306');
});