 const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

const validUsername = 'admin';
const validPassword = '1234';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === validUsername && password === validPassword) {
    res.redirect('/dashboard.html');
  } else {
    res.send('<h2>Login failed. <a href=\"/\">Try again</a></h2>');
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
