var content = document.getElementById("displayEmailDiv");
var outline = document.getElementById("outline");
var next = document.getElementById("next");
var results = document.getElementById('results');

var filename = 0
var randomNumber = Math.floor(Math.random() * 2) + 1 // gets either 1 or 2.
var phishing = []
var regular = []

for (i=1; i<101;i++){ //makes 2 lists fulled with numbers to 100.
 phishing.push(i);
 regular.push(i);
}

if (randomNumber == 1){
  filename = phishing.pop(-1)
  //content.innerHTML='<object id = "email" type="text/html" data="../Phishing_HTML/data (' + filename + ').html" style="min-height: 690px; width: 1500px;"></object>';
  content.innerHTML='<object id = "email" type="text/html" data="/Phishing_HTML/data%20(' + filename + ').html" style="min-height: 690px; width: 1500px;"></object>';
} else {
  filename = regular.pop(-1)
  //content.innerHTML='<object id = "email" type="text/html" data="../Regular_HTML/data (' + filename + ').html" style="min-height: 690px; width: 1500px;"></object>';
  content.innerHTML='<object id = "email" type="text/html" data="/Regular_HTML/data%20(' + filename + ').html" style="min-height: 690px; width: 1500px;"></object>';
}

next.addEventListener("click", function(){
if (randomNumber == 1){
  outline.classList.remove("green")
  outline.classList.add("red")

  results.classList.remove("green")
  results.classList.add("red")
  results.innerHTML = "Last email was phishing"
} else if (randomNumber == 2){
  outline.classList.remove("red")
  outline.classList.add("green")

  results.classList.remove("red")
  results.classList.add("green")
  results.innerHTML = "Last email was normal"
} else {
  outline.classList.remove("red")
  outline.classList.remove("green")
  outline.classList.add("black")

  results.classList.remove("red")
  results.classList.remove("green")
  results.classList.add("black")
  results.innerHTML = "Done"
}

  randomNumber = Math.floor(Math.random() * 2) + 1 // gets either 1 or 2.

  if (phishing.length == 0){
    randomNumber = 2
  }

  if (regular.length == 0){
    randomNumber = 1
  }

   if (phishing.length == 0 && regular.length == 0){
      content.innerHTML= "Done";
  } else {
    if (randomNumber == 1){
      filename = phishing.pop(-1)
      //content.innerHTML='<object id = "email" type="text/html" data="../Phishing_HTML/data (' + filename + ').html" style="min-height: 690px; width: 1500px;"></object>';
      content.innerHTML='<object id = "email" type="text/html" data="/Phishing_HTML/data%20(' + filename + ').html" style="min-height: 690px; width: 1500px;"></object>';
    } else{
      filename = regular.pop(-1)
      //content.innerHTML='<object id = "email" type="text/html" data="../Regular_HTML/data (' + filename + ').html" style="min-height: 690px; width: 1500px;"></object>';
      content.innerHTML='<object id = "email" type="text/html" data="/Regular_HTML/data%20(' + filename + ').html" style="min-height: 690px; width: 1500px;"></object>';
    }
  }

});
