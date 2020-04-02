const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/events-api', {
  useNewUrlParser: true
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

const user = require('./models/user');

const PORT = process.env.PORT || 5000;

// CORS support
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, PATCH, DELETE");
    return res.status(200).json({});
  }
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Get all events Route
// TODO: Get all events
app.get('/getAllUsers', function (req, res) {
    user.find({}, function (err, data) {
      if (err) {
        res.statusCode = 400;
        res.json(err);
      } else {
      data.length < 0 ? res.json([]) : res.send(JSON.stringify(data));
      }
    });
});

// Create a event
// TODO: Create event
app.post('/createUser', function (req, res) {
  const postData = req.body !== undefined && req.body !== null ? req.body : {};
  user.create(postData, function (err, data) {
    if (err) {
      res.statusCode = 400;
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

// Delete a event
// TODO: Delete event
app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id !== undefined && req.params.id !== null ? req.params.id : '';
  user.deleteOne({ _id: id }, function (err, data) {
    if (err) {
      res.statusCode = 404;
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

// Update a event
// TODO: Update an event
app.put('/editUser/:id', function (req, res) {
  const id = req.params.id !== undefined && req.params.id !== null ? req.params.id : '';
  const data = req.body !== undefined && req.body !== null ? req.body : {};
  user.update({ _id: id }, data, function (err, data) {
    if (err) {
      res.statusCode = 404;
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

// Listen on port
app.listen(PORT, function () {
  console.log('[SERVER]: Running on port ' + PORT);
});