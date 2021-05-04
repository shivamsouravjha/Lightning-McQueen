const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const service_router = require('./ZRoutes/service_router');
const customer_router = require('./ZRoutes/customer_router');
////const booking_routers = require('./ZRoutes/booking_routers');
const Erur = require('./Service_Model_stage2/Error');
const cors = require('cors')

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use('/api/service', service_router); // => /api/places...
app.use('/api/customer', customer_router);
///pp.use('/api/booking/', booking_routers);

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
    `mongodb://${process.env.name}:${process.env.password}@cluster0-shard-00-00.dm1xw.mongodb.net:27017,cluster0-shard-00-01.dm1xw.mongodb.net:27017,cluster0-shard-00-02.dm1xw.mongodb.net:27017/${process.env.db}?ssl=true&replicaSet=atlas-x6eag6-shard-0&authSource=admin&retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true }
  )
  .then(() => {
    app.listen(process.env.PORT || 5000);
  })
  .catch(err => {
    console.log(err);
  });
