const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
app.use(express.json());
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};
setInterval(() => {
  numberOfRequestsForUser = {};
}, 5000)

function check(req,res,next){
  let user=req.header['user-id']
  if(numberOfRequestsForUser[user]){
    numberOfRequestsForUser[user]++;
  }
  else{
    numberOfRequestsForUser[user]=1;
  }
  
  next();
}
function hello(req,res,next){
  let user=req.header['user-id']
  if(numberOfRequestsForUser[user]>5){
    res.status(404)
  }else{
    next();
  }
}
app.use(check,hello);



app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});
app.listen(3000);

module.exports = app;