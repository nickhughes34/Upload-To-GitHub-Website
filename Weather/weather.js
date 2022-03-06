//Key
const key = "777c91be320d416fa3a73048212012";

//On load add event add event listener
window.addEventListener('load', event => {
    getWeather();
    document.getElementById("search").addEventListener("click", multi);

    //init buttons for the differnet days.
    var but3 = document.getElementById("but3");
    var but2 = document.getElementById("but2");
    var but1 = document.getElementById("but1");
    but3.myParam = "but3";
    but2.myParam = "but2";
    but1.myParam = "but1";
    but3.addEventListener("click", page);
    but2.addEventListener("click", page);
    but1.addEventListener("click", page);
});

//Function to create html elemets.
function creation(kind_input, text){
  //Creates element.
  var kind = document.createElement(kind_input);
  var text = document.createTextNode(text);
  kind.appendChild(text);

  if (kind_input == "p"){
    kind.classList.add("change");
  }

  return kind;
}

//Function To Get The Weather.
function getWeather(){
    var input = document.getElementById("input");
    var dateName =  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var qDay = ["day1", "day2", "day3"];

    if (input.value == ""){ //Default value.
      input.value = "Ajax";
    }

    //fetch('https://api.weatherapi.com/v1/current.json?key=777c91be320d416fa3a73048212012&q='+input.value+'&aqi=no')
    fetch('https://api.weatherapi.com/v1/forecast.json?key='+key+'&q='+input.value+'&days=3&aqi=no&alerts=no')
    .then(response => response.json())
    .then(data => {
      //variables to use to store the data.
      var name = data["location"];
      var current = data["current"];
      var forecast = data["forecast"];

      //These are the info div elements.
      document.getElementById("country").innerHTML  = name["country"];
      document.getElementById("region").innerHTML  = name["region"];
      document.getElementById("city").innerHTML  = name["name"];
      document.getElementById("timezone").innerHTML = name["tz_id"];
      var tx = name["localtime"].split(" "); //fixes time to 12 hour clock.
      tx[1] = tx[1].split(":");
      tx[2] = (tx[1][0] >= 12 ? 'pm' : 'am');
      tx[3] = (((tx[1][0] % 12) || 12) + (":") + (tx[1][1]) + tx[2]);
      document.getElementById("time").innerHTML = tx[3];
      document.getElementById("date").innerHTML = forecast["forecastday"][0]["date"];

      document.getElementById("currentImg").src = current["condition"]["icon"];
      document.getElementById("cast").innerHTML = current["condition"]["text"];
      document.getElementById("temp_c").innerHTML = Math.round(current["temp_c"]) + "°C";
      wind = Math.round(current["wind_kph"]) + "km/h " + current["wind_degree"] + "° " + current["wind_dir"];
      document.getElementById("wind_kph").innerHTML = wind;
      document.getElementById("humidity").innerHTML = Math.round(current["humidity"]) + "%";
      document.getElementById("feelslike_c").innerHTML = Math.round(current["feelslike_c"]) + "°C";

      //loop for the 3 days.
      for (let q = 0;  q < 3;  q++){
        for (let i = 0;  i < 24;  i+= 1){
          //creates a div for each hour.
              if (i == 0){  //Called  once.

                //To get the Date Name.
                var day = document.getElementById(qDay[q]);
                day.appendChild(creation("label", dateName[new Date(forecast["forecastday"][q]["date"]).getDay()]))

                //Horizonal Line Break.
                var hr = document.createElement("hr");
                day.appendChild(hr);

                //Daily Label.
                day.appendChild(creation("label","Daily Average"));

                // Line Break.
                var br = document.createElement("br");
                day.appendChild(br);

                //Sunrise Label and Time.
                day.appendChild(creation("label","Sunrise:"));
                day.appendChild(creation("p", forecast["forecastday"][q]["astro"]["sunrise"]));

                //Sunset Label and Time.
                day.appendChild(creation("label","Sunset:"));
                day.appendChild(creation("p", forecast["forecastday"][q]["astro"]["sunset"]));

                //Moonrise Label and Time .
                day.appendChild(creation("label","Moonrise:"));
                day.appendChild(creation("p", forecast["forecastday"][q]["astro"]["moonrise"]));

                //Moonset Label and Time.
                day.appendChild(creation("label","Moonset:"));
                day.appendChild(creation("p", forecast["forecastday"][q]["astro"]["moonset"]));

                //Line Break.
                var br = document.createElement("br");
                day.appendChild(br);

                //Avg Temp Label and Temp.
                day.appendChild(creation("label","Avg Temp:"));
                day.appendChild(creation("p", Math.round(forecast["forecastday"][q]["day"]["avgtemp_c"]) + "°C"));

                //Max Temp Label and Temp.
                day.appendChild(creation("label","Max Temp:"));
                day.appendChild(creation("p", Math.round(forecast["forecastday"][q]["day"]["maxtemp_c"]) + "°C"));

                //Min Temp Label and Temp.
                day.appendChild(creation("label","Min Temp:"));
                day.appendChild(creation("p", Math.round(forecast["forecastday"][q]["day"]["mintemp_c"]) + "°C"));

                //Line Break.
                var br = document.createElement("br");
                day.appendChild(br);

                //Wind Label and KPH.
                day.appendChild(creation("label","Wind:"));
                day.appendChild(creation("p", Math.round(forecast["forecastday"][q]["day"]["maxwind_kph"]) + "km/h"));

                //% Avg Humidity Label and %.
                day.appendChild(creation("label","Humidity:"));
                day.appendChild(creation("p", Math.round(forecast["forecastday"][q]["day"]["avghumidity"]) + "%"));

                //% Rain Label and %.
                day.appendChild(creation("label","Chance of Rain:"));
                day.appendChild(creation("p", Math.round(forecast["forecastday"][q]["day"]["daily_chance_of_rain"]) + "%"));

                //% Snow Label.
                day.appendChild(creation("label","Chance of Snow:"));
                day.appendChild(creation("p", Math.round(forecast["forecastday"][q]["day"]["daily_chance_of_snow"]) + "%"));

                //Horizonal Line Break.
                var hr = document.createElement("hr");
                day.appendChild(hr);

                //Hourly Label.
                day.appendChild(creation("label","Houly Forecast"));
                //day.classList.add("center");
              }

              //Main div that stores the weather information.
              var x = forecast["forecastday"][q]["hour"][i]["time"].split(" ");
              x = x[1].split(":");
              var div = document.createElement("div");
              div.classList.add("hov");
              var p = document.createElement("p");

              //Hourly Time Labels.
              temp = ((x[0] % 12) || 12) + (i >= 12 ? 'pm' : 'am');
              temp = temp.toString();

              if (temp.length == 3){
                var text = document.createTextNode(temp + "\xa0\xa0");
              } else {
                var text = document.createTextNode(temp);
              }

              p.appendChild(text);
              div.appendChild(p);

              //Image for weather.
              var img = document.createElement("img");
              img.src = forecast["forecastday"][q]["hour"][i]["condition"]["icon"];
              div.appendChild(img);

              //Hourly Temps.
              var p = document.createElement("p");
              temp = Math.round(forecast["forecastday"][q]["hour"][i]["temp_c"]) + "°C";
              temp = temp.toString();

              if (temp.length == 3){
                var text = document.createTextNode("\xa0\xa0" + temp);
              } else if (temp.length == 4) {
                var text = document.createTextNode("\xa0" + temp);
              } else {
                var text = document.createTextNode(temp);
              }

              p.appendChild(text);
              div.appendChild(p);

              //Down Arrow.
              var p = document.createElement("p");
              var arrow = document.createTextNode("↴");
              p.appendChild(arrow);
              p.classList.add("right");
              div.appendChild(p);

              //Line break.
              var br = document.createElement("br");
              div.appendChild(br);

              //Expanded div that has detailed hourly information.
              var div2 = document.createElement("div");
              div2.classList.add("hidden", "left");
              var newID = "Div2-" + ((i + 1) + (24 * q)); //Creates IDs for the different divs.
              div2.id = newID;

              //Text Label and Text.
              div2.appendChild(creation("label", "Condition:"));
              div2.appendChild(creation("p", forecast["forecastday"][q]["hour"][i]["condition"]["text"]));

              //Wind Label and KPH.
              div2.appendChild(creation("label","Wind:"));
              wind = Math.round(forecast["forecastday"][q]["hour"][i]["wind_kph"]) + "km/h " +
                          forecast["forecastday"][q]["hour"][i]["wind_degree"] + "° " +
                          forecast["forecastday"][q]["hour"][i]["wind_dir"];
              div2.appendChild(creation("p", wind));

              //% Avg Humidity Label and %.
              div2.appendChild(creation("label","Humidity:"));
              div2.appendChild(creation("p", Math.round(forecast["forecastday"][q]["hour"][i]["humidity"]) + "%"));

              //Line break.
              var br = document.createElement("br");
              div2.appendChild(br);

              //Feels Like Label and Temp.
              div2.appendChild(creation("label","Feels Like:"));
              div2.appendChild(creation("p", Math.round(forecast["forecastday"][q]["hour"][i]["feelslike_c"]) + "°C"));

              //Wind Chill Label and Temp.
              div2.appendChild(creation("label","Wind Chill:"));
              div2.appendChild(creation("p", Math.round(forecast["forecastday"][q]["hour"][i]["windchill_c"]) + "°C"));

              //% Rain Label and %.
              div2.appendChild(creation("label","Chance of Rain:"));
              div2.appendChild(creation("p", Math.round(forecast["forecastday"][q]["hour"][i]["chance_of_rain"]) + "%"));

              //% Snow Label.
              div2.appendChild(creation("label","Chance of Snow:"));
              div2.appendChild(creation("p", Math.round(forecast["forecastday"][q]["hour"][i]["chance_of_snow"]) + "%"));

              //Adds expanded div to main div.
              div.appendChild(div2);

              //Creates a click event and appends div to main day div.
              div.addEventListener("click", expand, false); //Adds a listner for click.
              var newID = "Div-" + ((i + 1) + (24 * q)); //Creates IDs for the different divs.
              div.id = newID;
              div.myParam = [newID, div2.id];
              var day = document.getElementById(qDay[q]);
              day.appendChild(div);
              day.classList.add("center");
          }
        }

        //Moves buttons down.
        var buttons = document.getElementById("buttons");
         buttons.style.marginTop = "30px";
    })
    .catch(error => {console.error('Error:', error);});
    input.value = "";  //Removes input value
}

//Removes the 3 day weather elements.
function remove(){
    var qDay = ["day1", "day2", "day3"];
    for (let q = 0;  q < 3;  q++){
      var day = document.getElementById(qDay[q]);
      day.innerHTML = "";
    }

    //moves buttons up.
    var buttons = document.getElementById("buttons");
    buttons.style.marginTop = "5px";
}

//Scolls the user into view.
function move(){
  var move = document.getElementById("move");
  move.scrollIntoView();
}

//Calls the 3 main functions for setup/reset.
function multi(){
    remove();
    setTimeout(() => { getWeather() }, 500);
    //setTimeout(() => { move() }, 1000);
    document.getElementById("but1").click();
}

//Changes the visibility depending on the button pressed.
function page(event){ //moves days.
  var self = document.getElementById(event.currentTarget.myParam); //Gets the onclick ID from myParam.
  var dots = document.getElementsByClassName("dotColor");
  var expanded = document.getElementsByClassName("expand");
  var checker = document.getElementsByClassName("checker");
  var day1 = document.getElementById("day1");
  var day2 = document.getElementById("day2");
  var day3 = document.getElementById("day3");

  var loop = dots.length;
  for (var i = 0; i < loop; i++) { //Turns all dots off.
    dots[i].classList.remove("dotActive");
  }

  var loop = expanded.length;
  for (var i = 0; i < loop; i++) { //Turns all expand off.
    expanded[0].classList.remove("expand");
  }

  var loop = checker.length;
  for (var i = 0; i < loop; i++) { //Turns checker off and add hidden class.
    checker[0].classList.replace("checker", "hidden");
  }

  //Make first dot focused, makes every div hidden.
  self.classList.add("dotActive");
  day1.classList.replace("vis", "hidden");
  day2.classList.replace("vis", "hidden");
  day3.classList.replace("vis", "hidden");

  //Depending on button clicked that corresponding day will show.
  if (self.id == "but1"){
    day1.classList.replace("hidden", "vis");
    } else if (self.id == "but2"){
    day2.classList.replace("hidden", "vis");
  } else{
    day3.classList.replace("hidden", "vis");
  }
}

//Expands the div to display other key information.
function expand(event){ // expands the hourly weather divs.
  var self = document.getElementById(event.currentTarget.myParam[0]); //Gets the onclick ID from myParam.
  var contents = document.getElementById(event.currentTarget.myParam[1]); //Gets the onclick ID from myParam.

  if (self.classList.contains("expand") == true){
    self.classList.remove("expand");
    contents.classList.replace("checker","hidden");
  }else{
    self.classList.add("expand");
    contents.classList.replace("hidden", "checker");
  }
}
