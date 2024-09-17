////$('body').css("background-color","yellow");

// when button is clicked
// IIFE - Immediately Invoked f/n expression 
$("#btnGetAnimal").on("click", function(){
  //alert($("#bakername").val()); 
  let bakerName = $("#bakerName").val(); 
  //$("body").append("Hi there " + bakername);
  $("#greetingArea").text("Hi there " + bakerName + "!"); 
  $("#animalArea").text("Your spirit animal is:" + randomAnimal)
});
let spiritanimals = ["🦅","🐟","🐈","🐕","🦎", "file not found"]

let randomAnimal = spiritanimals[(Math.floor(Math.random() * spiritanimals.length))]





// get user name 

// give them a greeting