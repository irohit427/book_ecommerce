const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config()

app.get('/', (req, res) => {
  res.send("Hello from server");
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Server listening on port:", port);
})