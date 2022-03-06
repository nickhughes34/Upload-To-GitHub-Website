var counter = 0;

//Use jQuery
$(document).ready(function(){
  //Typing animation
  $("#movingMore").on("animationend", function(){
    var replace = ["Medium", "Small.", "In Stock"]

      if ($(this).hasClass("typewriter3")){
        $(this).removeClass("typewriter3");
        $(this).addClass("typeremover");
      } else{
        $(this).removeClass("typeremover");
        $(this).addClass("typewriter3");
        $(this).text(replace[counter]);
        counter = counter + 1;
      }

      //Resets the counter so it loops infinitly.
      if (counter == 3){
        counter = 0;
      }
  });

  //removes the longer delay and replaces it with a shorter one.
  $("#movingMore").one("animationend", function(){
    $(this).removeClass("delay3");
    $(this).addClass("delay");
  });

  //moves forward a space when clicked.
  $("#switch2").click(function(){
    $("#first").prop("id", "buffer");
    $("#second").prop("id", "first");
    $("#third").prop("id", "second");
    $("#fourth").prop("id", "third");
    $("#fifth").prop("id", "fourth");
    $("#sixth").prop("id", "fifth");
    $("#buffer").prop("id", "sixth");
  });

  //moves backward a space when clicked.
  $("#switch").click(function(){
    $("#third").prop("id", "buffer");
    $("#second").prop("id", "third");
    $("#first").prop("id", "second");
    $("#sixth").prop("id", "first");
    $("#fifth").prop("id", "sixth");
    $("#fourth").prop("id", "fifth");
    $("#buffer").prop("id", "fourth");
  });

  //displays cart on click
  $("#cart").click(function(){
    if ($("#back2").hasClass("hidden")){
      $("#back2").removeClass("hidden");
      $("#back2").addClass("vis");
    } else{
      $("#back2").removeClass("vis");
      $("#back2").addClass("hidden");
    }

  });

  //moves forward a space every 20 seconds.
  var every20 = window.setInterval(function(){
    $("#switch2").click();
  }, 20000);

  //Call to stop interval.
  //clearInterval(every20);

   addToHTML();

});


//Function to create html elemets.
function creation(kind_input, text_input = "", class_input = "", id_input = ""){
  //Creates element.
  var kind = document.createElement(kind_input);
  if (text_input != ""){
    var text = document.createTextNode(text_input);
    kind.appendChild(text);
  }
  if (class_input != ""){
    if (class_input.length > 1){
      for (i = 0; i < class_input.length; i ++){
        kind.classList.add(class_input[i]);
      }
    }else{
      kind.classList.add(class_input);
    }
  }

  if (id_input != ""){
    kind.id = id_input;
  }

  return kind;
}

function sliderElement(div_id, p_text, li_text){
  var div = creation("div", "", ["contain", "color3"], div_id);
  div.appendChild(creation("p", p_text, ["center"]));
  div.appendChild(document.createElement("hr"));

  var ul = creation("ul", "", ["list-text"]);
  ul.appendChild(creation("li", li_text[0], ["typewriter","delay2"]));
  ul.appendChild(creation("li", li_text[1], ["typewriter","delay2"]));
  ul.appendChild(creation("li", li_text[2], ["typewriter","delay3"]));
  ul.appendChild(creation("li", li_text[3], ["typewriter","delay3"]));
  div.appendChild(ul);
  return div;
}

function addToHTML(){
  slider = sliderElement("first", "Max Slim Shoes", ["Stylish!", "Black!", "Red!", "L M S"]);
  $("#grid").append(slider);

  slider = sliderElement("second", "Max Slim Pants", ["Stylish!", "Black!", "Yellow!", "L M S"]);
  $("#grid").append(slider);

  slider = sliderElement("fourth", "Max Slim Shirt", ["Stylish!", "Blue!!", "Red!", "L M S"]);
  $("#grid").append(slider);

  slider = sliderElement("fifth", "Min Slim Shoes", ["Stylish!", "Red!!", "Bule!", "L M S"]);
  $("#grid").append(slider);

  slider = sliderElement("sixth", "Min Slim Pants", ["Stylish!", "Yellow!!", "Black!", "L M S"]);
  $("#grid").append(slider);

}
