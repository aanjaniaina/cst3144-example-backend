var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());
 let subjectDetails = [
  {
    subject: "Computer Science",
    id: "1001", //give the lesson an ID number
    location: "Hendon",
    price: 10,
    availability: 5 //add an availability field that tracks how many slots are available
  },
  {
    subject: "Mathematics",
    id: "1002", //give the lesson an ID number
    location: "Dubai",
    price: 20,
    availability: 5,
  },
  {
    subject: "Science",
    id: "1003", //give the lesson an ID number
    location: "Mauritius",
    price: 15,
    availability: 5,
  }
 ]

app.use(function(request, response){
  console.log("In comes a request to: " + request.url);
  response.json(subjectDetails);
});

app.listen(3002, function(){
  console.log("App started on port 3002");
});