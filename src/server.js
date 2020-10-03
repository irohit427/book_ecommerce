const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const mongoConnect = require('./db/connect');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const categoryroute = require('./routes/category');
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use('/api/v1/', authRoute);
app.use('/api/v1/', userRoute);
app.use('/api/v1/', categoryroute);
dotenv.config()

mongoConnect();

app.get('/', (req, res) => {
  res.send("Hello from server");
})

const port = process.env.PORT || 8000;


app.listen(port, () => {
  console.log("Server listening on port:", port);
})