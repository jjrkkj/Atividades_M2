const express = require('express'); 
const app = express();

const sqlite3 = require('sqlite3');
const DBPATH = '../data/database.db';

const hostname = '127.0.0.1';
const port = 5500;

app.use(express.static('../frontend/'))
app.use(express.json());

// Endpoints

app.get('/formacao', (req, res) => {
    var db = new sqlite3.Database(DBPATH);
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var sql = 'SELECT curso, ano_inicial, ano_final, descricao FROM formacao ORDER BY ano_final ASC';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            console.log(err);
        }
        res.json(rows);
    });
    db.close();
});

app.get('/experiencia', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
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
    var sql = 'SELECT id, nome, cargo, foto, estado, cidade, rua, numero, email, telefone, descricao FROM pessoa';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close();
});

app.listen(port, hostname, () => {
    console.log(`Servidor rodando em: http://${hostname}:${port}/`)
})