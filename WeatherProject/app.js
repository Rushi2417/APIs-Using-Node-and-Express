const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

const apikey = "YourApikey";
const unit = "metric";
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    const city = req.body.cityName;
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid="+ apikey +"&units="+ unit;
    https.get(url, function(response){
        response.on("data", function(data){
            var weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDesc = weatherData.weather[0].description;
            const icon = "https://openweathermap.org/img/wn/"+ weatherData.weather[0].icon+"@2x.png"
            res.write("<h1>The temp in " +city +" is "+temp+" degree celcius</h1>");
            res.write("<p>The weather is "+weatherDesc+"</p>");
            res.write("<img src="+ icon +">");
            res.send();
        })
      
    });

})


app.listen(3000, function(){
    console.log("Server is running");
});