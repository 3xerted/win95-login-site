const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

console.log("Loaded USERNAME:", process.env.USERNAME);
console.log("Loaded PASSWORD:", process.env.PASSWORD);

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (
    username === process.env.USERNAME &&
    password === process.env.PASSWORD
  ) {
    res.redirect('/dashboard.html');
  } else {
    res.redirect('/?error=1');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
