var correct = 0;
var incorrect = 0;
var unanswered = 0;
var questions = [];
var timerNumber = 100;
// var answers


var questionsArray = [
  {
    question: " What is sushi traditionally wrapped in?",
    answers: ["Edible Seaweed", "Nori", "Rice Paper"],
    correctAnswer: "Nori"
  },
  {
    question: "What flavour is Cointreau?",
    answers: ["Hazel Nut", "Orange", "Lemon"],
    correctAnswer: "Orange"
  },
  {
    question: "What type of flowers produce vanilla pods?",
    answers: ["Crocus Flower", "Orchid Flower", "Saffron Flower"],
    correctAnswer: "Orchid Flower"
  },
  {
    question: " Which member of the ginger family is used to color curries?",
    answers: ["Baby Ginger", "Tumeric Ginger", "Yellow Ginger"],
    correctAnswer: "Tumeric Ginger"
  },
  {
    question: "Champagne is made with what variety of grapes?",
    answers: ["Chardonney", "Suavignon Blanc", "Pinot Grigio"],
    correctAnswer: "Chardonney"
  },
  {
    question: "The rice dish paella comes from what country?",
    answers: ["France", "Spain", "Italy"],
    correctAnswer: "Spain"
  },
  {
    question: "In which country was ice cream invented?",
    answers: ["Italy", "China", "United States"],
    correctAnswer: "China"
  },
  {
    question: "What hot beverage was named for the UK Prime Minister of the 1830s?",
    answers: ["ChurchHill TODDY ", "Earl Grey Tea", "Hot TODDY"],
    correctAnswer: "Earl Grey Tea"
  },
  {
    question: "Who was the legendary Benedictine monk who invented champagne?",
    answers: ["Armand Brignac", "Dom Perignon", "Moet Chandon"],
    correctAnswer: "Dom Perignon"
  },
  {
    question: "Where were the first European coffee houses opened?",
    answers: ["Prague", "Vienna", "Paris"],
    correctAnswer: "Vienna"
  }
];


// This code will run as soon as the page loads
window.onload = function () {
  // $("#lap").on("click", stopwatch.recordLap);
  $("#allDone").on("click", stopwatch.stop);
  $("#reset").on("click", stopwatch.reset);
  $("#start").on("click", stopwatch.start);

};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our stopwatch object
var stopwatch = {

  time: 0,
  // lap: 1,

  reset: function () {

    stopwatch.time = 0;
    stopwatch.lap = 1;

    // DONE: Change the "display" div to "00:00."
    $("#display").text("02:00");

    // DONE: Empty the "laps" div.
    // $("#laps").text("");
  },
  start: function () {

    console.log("start game")
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(stopwatch.count, 1000);
      clockRunning = true;
    }
    for (var i = 0; i < questionsArray.length; i++) {

      // Then dynamicaly generates buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      $("#questionContainer").append("<h2>" + questionsArray[i].question + "</h2>");
      for (var j = 0; j < questionsArray[i].answers.length; j++) {

        $("#questionContainer").append("<input class='answerbutton' type='radio' name='questionsArray-" + i +
          "' value='" + questionsArray[i].answers[j] + "''>" + questionsArray[i].answers[j]);

      }
    }
  },



  stop: function () {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
    comparingAnswers();
    $("#toRemove").remove();

    $("#correct").text(correct);
    $("#incorrect").text(incorrect);
  },
  // recordLap: function() {

  //   // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
  //   //       and save the result in a variable.
  //   var converted = stopwatch.timeConverter(stopwatch.time);

  //   // DONE: Add the current lap and time to the "laps" div.
  //   $("#laps").append("<p>Lap " + stopwatch.lap + " : " + converted + "</p>");

  //   // DONE: Increment lap by 1. Remember, we can't use "this" here.
  //   stopwatch.lap++;
  // },
  count: function () {

    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time--;

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
  },
  timeConverter: function (t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};



// function startGame ()


// function startGame (){

//   $("#questionContainer").load("questionsArray");
//         console.log("start game")

//   }



//create start button and load questions + onclick
// $("#start").on("click", questionsArray);








//create All Done button + //JQuery to html id or class for correct, incorrect and unanswered
$("#allDone").on("click", correct, incorrect, correct);

//function to  start and end timer attached to all done button


// function to track correct, incorrect, unanswered + display results
function comparingAnswers() {

  console.log("compare answers below")
  var selectedQuestion0 = $("input[name='questionsArray-0']:checked").val();
  console.log(selectedQuestion0);

  if (selectedQuestion0 === questionsArray[0].correctAnswer) {
    correct++;
  }
  else {
    incorrect++;
  }

  var selectedQuestion1 = $("input[name='questionsArray-1']:checked").val();
  console.log(selectedQuestion1);

  if (selectedQuestion1 === questionsArray[1].correctAnswer) {
    correct++;
  }
  else {
    incorrect++;
  }

  console.log('correct: ' + correct + ' incorrect: ' + incorrect);
  var selectedQuestion2 = $("input[name='questionsArray-2']:checked").val();
  console.log(selectedQuestion2);

  if (selectedQuestion2 === questionsArray[2].correctAnswer) {
    correct++;
  }
  else {
    incorrect++;
  }

  console.log('correct: ' + correct + ' incorrect: ' + incorrect);

  var selectedQuestion3 = $("input[name='questionsArray-3']:checked").val();
  console.log(selectedQuestion3);

  if (selectedQuestion3 === questionsArray[3].correctAnswer) {
    correct++;
  }
  else {
    incorrect++;
  }

  console.log('correct: ' + correct + ' incorrect: ' + incorrect);

  var selectedQuestion4 = $("input[name='questionsArray-4']:checked").val();
  console.log(selectedQuestion4);

  if (selectedQuestion4 === questionsArray[4].correctAnswer) {
    correct++;
  }
  else {
    incorrect++;
  }

  console.log('correct: ' + correct + ' incorrect: ' + incorrect);

  var selectedQuestion5 = $("input[name='questionsArray-5']:checked").val();
  console.log(selectedQuestion5);

  if (selectedQuestion5 === questionsArray[5].correctAnswer) {
    correct++;
  }
  else {
    incorrect++;
  }

  console.log('correct: ' + correct + ' incorrect: ' + incorrect);

  var selectedQuestion6 = $("input[name='questionsArray-6']:checked").val();
  console.log(selectedQuestion6);

  if (selectedQuestion6 === questionsArray[6].correctAnswer) {
    correct++;
  }
  else {
    incorrect++;
  }

  console.log('correct: ' + correct + ' incorrect: ' + incorrect);

  var selectedQuestion7 = $("input[name='questionsArray-7']:checked").val();
  console.log(selectedQuestion7);

  if (selectedQuestion7 === questionsArray[7].correctAnswer) {
    correct++;
  }
  else {
    incorrect++;
  }

  console.log('correct: ' + correct + ' incorrect: ' + incorrect);

  var selectedQuestion8 = $("input[name='questionsArray-8']:checked").val();
  console.log(selectedQuestion8);

  if (selectedQuestion8 === questionsArray[8].correctAnswer) {
    correct++;
  }
  else {
    incorrect++;
  }

  console.log('correct: ' + correct + ' incorrect: ' + incorrect);

  var selectedQuestion9 = $("input[name='questionsArray-9']:checked").val();
  console.log(selectedQuestion9);

  if (selectedQuestion9 === questionsArray[9].correctAnswer) {
    correct++;
  }
  else {
    incorrect++;
  }

  console.log('correct: ' + correct + ' incorrect: ' + incorrect);



}




//for loop to identify which radio buttons are correct or notAnswered

// create radio buttons as we did in the movie activity with a loop??

// var container = $('#radio-container');
// for (var i = 0; i < 20; i++) {
//     container.append('<input type="radio" name="radio_group" value="' + i + '">');
// }




$(".answerbutton").on("click", function () {
  //the answer that is clicked is saved and compared to the correct answer
  // $(this).
  // console.log($(this))
  console.log(this.value)
})






 //create a timer then display all done

//  Interval Demonstration
    //  Set our number counter to 100.
    // var number = 100;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function


    // //  When the stop button gets clicked, run the stop function.
    // $("#stop").on("click", stop);

    // //  When the resume button gets clicked, execute the run function.
    // $("#resume").on("click", run);





