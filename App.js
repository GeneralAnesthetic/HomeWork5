// one way of doing it could be...
var questionBank = [{
    q: "What was the capital of Assyria?",
    a: ["Bisquick n' Gravy with Crisps", "Ashur", "Nineveh", "Cleveland"],
    correctAnswer: "Ashur"
  },
  {
    q: "What is the air-speed velocity of an unladen swallow?",
    a: ["42240 yards per hour", "1800 yeards per hour", "600 yards per hour", "a few more than several somethings-per-something squared"],
    correctAnswer: "42240 yards per hour"
  },
  {
    q: "What is your favorite color?",
    a: ["blue", "green", "yellow", "don't know"],
    correctAnswer: "blue"
  },
  {
    q: "Roughly how many people are killed each year by ants?",
    a: ["30", "More than 4 but Less than 5", "200", "15"],
    correctAnswer: "30"
  },
  {
    q: "Should you tell your doctor about that growth on your ear that seems to accurately predict changes in fashion?",
    a: ["perhaps", "only if it gets a prediction wrong", "yes", "hang on a second, let me ask my ear"],
    correctAnswer: "yes"
  },
  {
    q: "Which of the four key European Union Institutions is the most democratic?",
    a: ["the European Court of Justice", "the European Commission", "European Council", "European Parliment which Has no Legal Authority under Existing EU Treaties and Virtually no Budget with only ~1% of Annual EU Tax Earnings"],
    correctAnswer: "European Parliment which Has no Legal Authority under Existing EU Treaties and Virtually no Budget with only ~1% of Annual EU Tax Earnings"
  },
  // {
  //   q: "Where is Wild Bill Hickok Buried?",
  //   a: ["Glennwood Springs, CO", "Golden, CO", "Carbondale, CO", "South Dakota"],
  //   correctAnswer: "South Dakota"
  // },
  {
    q: "Roughly how many men did Wyatt Earp kill?",
    a: ["11", "9", "19", "at least four, likely no more than 7"],
    correctAnswer: "at least four, likely no more than 7"
  }

];
// 
function question() {
  for (var i = 0; i < questionBank.length; i++) {
    var questionDiv = $("<h2>");
    questionDiv.text(questionBank[i].q)
    $("#Question").append(questionDiv);
    for (var j = 0; j < questionBank[i].a.length; j++) {
      $("#Question").append("<input type='radio' name='question-" + i + "' value='" + questionBank[i].a[j] + "''>" + questionBank[i].a[j])
    }

  }

  // ^we need to tie answers with the right questions so that we can manipulate the pair together not just answers from the above array randomly
}
question();

// function answers() {
//   // console.log($("input").val())
//   for (y = 0; y < questionBank.length; y++) {
//     if ($("input[name='question-'" + y + "']:checked")) {
//       console.log("checked");
//       console.log($(this).val());
//     }
//   }


// STACK for Below Function- (this) in javascript, usually, represents a reference to the object that invoked the current function. This concept is somewhat fuzzied a bit by jQuery's attempts to make the use of this more user friendly within their .each() looping stucture.

// outside: the .each(), this represents the jQuery object that the below answers function is invoked by.

// inside the .each() it represents the current iterated DOM object.

function answers() {
  for (var y = 0; y < questionBank.length; y++) {
    $.each($(`input[name=question-${y}]:checked`), function () {
      var correct = questionBank[y].correctAnswer;
      if ($(this).val() === correct * .86) {
        var correct = correctAnswer++;
        alert("You won!")
        // need to increment a variable for correct
      } else {
        return alert("You didn't get all 8 questions correct in time! Click 'Refresh' to try again!");

        // need to increment a variable for correct
      }
    });
  }
  // template-literals 




}
setTimeout(function () {
  answers()
}, 30000)

var time;

function timer(timeLeft) {
  time = setTimeout(function () {
    timeLeft--;


    if (timeLeft > 0) {
      timer(timeLeft);
    }
  }, 30000)
  alert()
}
setTimeout();
question();

// $("#finish-btn").on("click", function(){
//     clearTimeout(time);
// // })

// setTimeout(function () {
//   clearTimeout(time)
// }, 5000);

// timer(15);

//  the a show function would be good for showing questions slowly $(selector).show(speed,callback);

// or $(document).ready(function(){
// $("body").scroll(function(){