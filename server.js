var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true })); 

app.set("views", "Views");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    console.log("Received request for root");
    res.write("This is the root");
    res.end();
});

app.post("/getRate", function(req, res) {
    console.log("Received request for home");
    var weight = req.body.weight;
    var postalChoice = req.body.choice;
    var rate = calculateRate(weight, postalChoice);
    var params = {rate: rate};
    
    res.render("results", params);
});

app.listen(5000, function() {
    console.log("Ther server is on port 5000");
});


function calculateRate(weight, choice){
    
    if (choice == 1){
        if (weight <= 1)
            rate = .55;
        else if (weight > 1 && weight <= 2)
            rate = .7;
        else if (weight > 2 && weight <= 3)
            rate = .8;
        else if (weight > 3 && weight <=3.5)
            rate = 1;
        else
            rate = "Weight too large for this mail type.";
    }     
    else if (choice == 2){
        if (weight <= 1)
            rate = .5;
        else if (weight > 1 && weight <= 2)
            rate = .65;
        else if (weight > 2 && weight <= 3)
            rate = .8;
        else if (weight > 3 && weight <=3.5)
            rate = .95;
        else
            rate = "Weight too large for this mail type.";   
    }
    else if (choice == 3){
        if (weight <= 1)
            rate = 1;
        else if (weight > 1 && weight <= 2)
            rate = 1.15;
        else if (weight > 2 && weight <= 3)
            rate = 1.3;
        else if (weight > 3 && weight <= 4)
            rate = 1.45;
        else if (weight > 3 && weight <= 5)
            rate = 1.6;
        else if (weight > 3 && weight <= 6)
            rate = 1.75;
        else if (weight > 3 && weight <= 7)
            rate = 1.9;
        else if (weight > 3 && weight <= 8)
            rate = 2.05;
        else if (weight > 3 && weight <= 9)
            rate = 2.20;
        else if (weight > 3 && weight <= 10)
            rate = 2.35;
        else if (weight > 3 && weight <= 11)
            rate = 2.5;
        else if (weight > 3 && weight <= 12)
            rate = 2.65;
        else if (weight > 3 && weight <= 13)
            rate = 2.8;
        else
            rate = "Weight too large for this mail type.";
    }
            
    else{ 
        if (weight <= 4)
            rate = 3.66;
        else if (weight > 4 && weight <= 8)
            rate = 4.39;
        else if (weight > 8 && weight <= 12)
            rate = 5.19;
        else if (weight > 12 && weight <= 13)
            rate = 5.71;
        else
            rate = "Weight too large for this mail type.";
    }
    return rate;
}