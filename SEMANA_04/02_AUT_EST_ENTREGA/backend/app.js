const express = require('express'); 
const sqlite3 = require('sqlite3').verbose();

const app = express();
const DBPATH = '../data/database.db';

const hostname = '127.0.0.1';
const port = 3000;

app.use(express.json());
app.get('/formacao', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT curso, ano_inicial, ano_final FROM formacao ORDER BY data_final DESC';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close();
});

app.get('/experiencia', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT empresa, ano_inicial, ano_final, cargo, descricao FROM experiencia ORDER BY data_final DESC';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close();
});

app.get('/habilidades', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT habilidade, nivel FROM habilidades ORDER BY nivel DESC';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close();
});

app.get('/personalidade', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT caracteristica, nivel FROM personalidade ORDER BY nivel DESC';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close();
});

app.get('/realizacoes', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT realizacao, ano, descricao FROM realizacoes ORDER BY ano ASC';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close();
});

app.get('/pessoa', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT id, nome, cargo, foto, estado, cidade, rua, numero, email, telefone, descricao FROM pessoa';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close();
});