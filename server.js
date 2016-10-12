// Timestamp microservice application built in NODE

const moment = require("moment");
const express = require('express');
var app = express();

// matches any url
app.get("/:date", function (req, res) {
  // decides whether to parse date or not
    var query = (isNaN(parseInt(req.params.date))) ? req.params.date : parseInt(req.params.date);
    var date = new Date(query);
    var natural = moment(date.getTime()).format("MMMM D, YYYY");

    var response_JSON = {
      "unix" : date.getTime(),
      "natural" : natural
    }

    res.writeHeader(200, {
        "Content-Type" : "application/json"
    });

    res.end(JSON.stringify(response_JSON));

}).listen(8080);
