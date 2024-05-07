const express = require('express');
const mysql = require('mysql');
const path = require('path');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'users'
});
const app = express();

const port = 4000;

app.use(express.json());

connection.connect();

app.use('/static', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));





app.get('/', (req, res) => {
  connection.query('select * from users', (error, rows) => {
    if (error) return error;
    res.send(rows);
  });
});

app.get('/signup', (req,res) => {
  res.render('signup')
})
app.post('/signup', (req,res) => {
  res.send('bye')
})


app.listen(port, () => {
  console.log(`listening on ${port}`)
})