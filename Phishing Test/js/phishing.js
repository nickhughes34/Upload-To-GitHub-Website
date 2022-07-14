var content = document.getElementById("displayEmailDiv2");
var outline = document.getElementById("outline");
var next = document.getElementById("next");
var results = document.getElementById('results');

var filename = []
var randomNumber = Math.floor(Math.random() * 2) + 1 // gets either 1 or 2.
var phishing = []
var regular = []
var file = ""
var randomNumberList = [0]
var alert = true
var finished = false
var first = true
var userData = ["", [], [], [], []] // name, emails clicked phishing, emails clicked regular, how long they looked before clicking email phishing, how long they looked before clicking email regular
var startTime = 0
var clickTime = 0
var firstTime = true

//toggles border colors;
document.getElementById('border').addEventListener("change", function(){
  outline.classList.toggle("transparent");
  results.classList.toggle("transparent");
});

//toggles alert message
document.getElementById('alert').addEventListener("change", function(){
    if (alert == true){
      alert = false;
    } else {
      alert = true;
    }
});

//Alert if user clicks on link.
function Alert() {

  if (randomNumberList[randomNumberList.length - 2] == 1){
    userData[1][(filename[(filename.length - 2)] - 1)][1] = userData[1][(filename[(filename.length - 2)] - 1)][1] + 1;  //userData[phishing][filename's value - 1][amout of clicks] ++ 1

    var input = time();
    if (input != false){
      userData[3][(filename[(filename.length - 2)] - 1)][1] = input;  //userData[phishing][filename's value - 1][time took to click]
    }

    if (alert == true){
      confirm ("This is a phishing link don't click. Remember to keep in mind: \n 1. Is this a trusted source? \n 2. Does the email sound legitimate? \n 3. Does the link look legitimate?")
    }
  }

   if (randomNumberList[randomNumberList.length - 2] == 2){
     userData[2][(filename[(filename.length - 2)] - 1)][1] = userData[2][(filename[(filename.length - 2)] - 1)][1] + 1; //userData[regular][filename's value - 1][amout of clicks] ++ 1

     var input = time();
     if (input != false){
     userData[4][(filename[(filename.length - 2)] - 1)][1] = input;  //userData[regular][filename's value - 1][time took to click]
   }

     if (alert == true){
       confirm ("This is a regular link. Remember to keep in mind: \n 1. Is this a trusted source? \n 2. Does the email sound legitimate? \n 3. Does the link look legitimate?")
     }
  }

}

for (i=1; i<101;i++){ //makes 2 lists fulled with numbers to 100. And fills userData.
 phishing.push(i);
 regular.push(i);
 userData[1].push([i, 0]);
 userData[2].push([i, 0]);
 userData[3].push([i, 0]);
 userData[4].push([i, 0]);
}

//First email is loaded in the background, added the phishing number to list.
  if (randomNumber == 1){
    filename.push(phishing.pop(-1));
    //For github you have to use the full link but anywhere else the below code should work.
    //file = '../Phishing_HTML/data%20(' + filename[filename.length - 1] + ').html'
    file = 'https://nickhughes34.github.io/Phishing%20Test/Phishing_HTML/data%20(' + filename[filename.length - 1] + ').html'
    $("#displayEmailDiv2").load(file)
  } else{
    filename.push(regular.pop(-1));
    //For github you have to use the full link but anywhere else the below code should work.
    //file = '../Regular_HTML/data%20(' + filename[filename.length - 1] + ').html'
    file = 'https://nickhughes34.github.io/Phishing%20Test/Regular_HTML/data%20(' + filename[filename.length - 1] + ').html'
    $("#displayEmailDiv2").load(file)
  }

  randomNumberList.push(randomNumber);

function time(){

  if (firstTime == true){
    clickTime = new Date().getTime(); // gets current time.
    firstTime = false

    return (clickTime - startTime) / 1000
  }

  return false
}

$(document).ready(function(){
    next.addEventListener("click", function(){

      if (first == false){
        var input = time();
        if (input != false){
                if (randomNumberList[randomNumberList.length - 2] == 1){
                  userData[3][(filename[(filename.length - 2)] - 1)][1] = input;  //userData[phishing][filename's value - 1][time took to click]
                }

                 if (randomNumberList[randomNumberList.length - 2] == 2){
                   userData[4][(filename[(filename.length - 2)] - 1)][1] = input;  //userData[regular][filename's value - 1][time took to click]
            }
        }
    }

    if (first == true){
      userData[0] = document.getElementById("name").value
      first = false
    }

      startTime = new Date().getTime();

      //replaces already loaded html from 2 to 1.
      $('#displayEmailDiv').html('');
      $('#displayEmailDiv').html($('#displayEmailDiv2').html());
      $('#displayEmailDiv2').html('');
      next.innerHTML='<span>Next</span><i class="fa-solid fa-arrow-right"></i>';

      //loads the previous email color.
    if (randomNumberList[randomNumberList.length - 2] == 1){
      outline.classList.remove("green")
      outline.classList.add("red")

      results.classList.remove("green")
      results.classList.add("red")
      results.innerHTML = "Last email was phishing"
    } else if (randomNumberList[randomNumberList.length - 2] == 2){
      outline.classList.remove("red")
      outline.classList.add("green")

      results.classList.remove("red")
      results.classList.add("green")
      results.innerHTML = "Last email was normal"
    }  else if (randomNumberList[randomNumberList.length - 2] == 0){
    } else {
      outline.classList.remove("red")
      outline.classList.remove("green")
      outline.classList.add("black")

      results.classList.remove("red")
      results.classList.remove("green")
      results.classList.add("black")
      results.innerHTML = "Done"
    }

    //ends the counters and stops button clicks.
    if (finished == true){
      next.classList.add("done")
      next.innerHTML = "Done!"

      console.log(userData);
      console.log(filename);

      //waits 5 seconds
      setTimeout(function () {
            outline.classList.remove("red")
            outline.classList.remove("green")
            outline.classList.add("black")

            results.classList.remove("red")
            results.classList.remove("green")
            results.classList.add("black")
            results.innerHTML = "Done"
      }, 5000);
    }

    //gets next random email.
      randomNumber = Math.floor(Math.random() * 2) + 1 // gets either 1 or 2.

      if (phishing.length == 0){ //if a list is finished first change to the other
        randomNumber = 2
      }

      if (regular.length == 0){
        randomNumber = 1
      }

      randomNumberList.push(randomNumber);

      //loads email to background.
       if (phishing.length == 0 && regular.length == 0){
          document.getElementById("displayEmailDiv2").innerHTML= "Done";
          finished = true;
          filename.push(0);
      } else {
        if (randomNumber == 1){
          filename.push(phishing.pop(-1));
          //file = url; the url should be where the file is hosted.
          //For github you have to use the full link but anywhere else the below code should work.
          //file = '../Phishing_HTML/data%20(' + filename[filename.length - 1] + ').html'
          file = 'https://nickhughes34.github.io/Phishing%20Test/Phishing_HTML/data%20(' + filename[filename.length - 1] + ').html'
          $("#displayEmailDiv2").load(file);
        } else{
          filename.push(regular.pop(-1));
          //file = url; the url should be where the file is hosted.
          //For github you have to use the full link but anywhere else the below code should work.
          //file = '../Regular_HTML/data%20(' + filename[filename.length - 1] + ').html'
          file = 'https://nickhughes34.github.io/Phishing%20Test/Regular_HTML/data%20(' + filename[filename.length - 1] + ').html'
          $("#displayEmailDiv2").load(file);
        }
      }

      //changes all a tags to remove the phishing links and adds popup menu.
      var aTags = document.getElementsByTagName("a")
      for (i=0; i<aTags.length; i++){

          if ($(aTags[i]).hasClass("dontlink")){
          } else{
            aTags[i].href = "javascript:Alert();";
            aTags[i].target = "";
          }

      }

      firstTime = true //resets time counter

    });
});
