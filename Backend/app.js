const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const rider_router = require('./Routes/rider_router');
//const memes = require('./ROUTERS/memes');
const Erur = require('./MODEL/Error');

const app = express();
app.use(bodyParser.json());

app.use('/api/rider', rider_router); // => /api/places...
//app.use('/api/memes', memes);

app.use((req, res, next) => {
    const error = new Erur('Could not find this route.', 404);
    throw error;
  });
  
  app.use((error, req, res, next) => {
    if (res.headerSent) {
      return next(error);
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'An unknown error occurred!'});
  });
  mongoose
  .connect(
    `mongodb+srv://shivam:123456shivam@cluster0.dm1xw.mongodb.net/mcqueen?retryWrites=true&w=majority`,{ useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true }
  )
  .then(() => {
    app.listen(process.env.PORT || 5000);
  })
  .catch(err => {
    console.log(err);
  });
