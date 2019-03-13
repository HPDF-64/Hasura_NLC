var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', "ejs");

//Watson Authentication

var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
    "username": "b4bec901-241a-49a8-ae58-bd7b83a185f1",
    "password": "ze8IPxzaPfSs",
    'version_date': '2017-02-27'
});

//POST method

app.post('/', function (req, res) {
    var inputString = req.body.input;
    compute(inputString);

    function compute(input) {
        var parameters = {
            'text': input,
            'features': {
                'categories': {}
            }
        };

        natural_language_understanding.analyze(parameters, function (err, response) {
            if (err)
                console.log('error:', err);
            else
                resp = JSON.stringify(response, null, 2);
            console.log(resp);
            sendRes(resp);
        });
    }

    function sendRes(output){
        res.setHeader('Content-Type', 'application/json');
        res.send(output);
    }
});


//Runserver
app.listen(8080, function() {
    console.log("server is running at 8080");
});