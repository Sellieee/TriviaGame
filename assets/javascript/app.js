$(document).ready(function() {
  // Hiding the quiz until user clicks on "Start Quiz!"
  $(function() {
    $(".quiz-start").hide();
  });

  // Playing audio when "Start Quiz!" button is clicked
  const sound = new Audio();
  document.getElementById("start").addEventListener("click", playSound);

  //   function createTimer(fn, interval = 1000) {

  //     var intervalId = setInterval(fn, interval)
  //     return {
  //         intervalId,
  //         stop
  //     }
  //   }

  function playSound() {
    sound.src = "./assets/theme-song.mp3";
    sound.play();
  }

  // Hide start button to reveal quiz
  $(".button-start").click(function() {
    $(".quiz-start").show();
    $(".button-start").hide();
    var count = 30;
    var intervalId;

    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
      count--;
      $("#timer").html(
        "<h2>You have " +
          count +
          " seconds remaining, can you beat the time?</h2>"
      );
      if (count === 0) {
        stop();
        alert(
          "Uhoh, maybe you need to train harder before you attempt to be a Pokémon Master..."
        );
      }
    }

    function stop() {
      clearInterval(intervalId);
    }
    run();
  });

  var correct = 0;
  var incorrect = 0;

  // Question 1
  $(".btn1a, .btn1b, .btn1d").click(function() {
    $(this)
      .removeClass("btn-light")
      .addClass("btn-danger");
  });
  $(".btn1c").click(function() {
    $(this)
      .removeClass("btn-light")
      .addClass("btn-success");
  });

  // Question 2
  $(".btn2a, .btn2c, .btn2d").click(function() {
    $(this)
      .removeClass("btn-light")
      .addClass("btn-danger");
    incorrect++;
  });
  $(".btn2b").click(function() {
    $(this)
      .removeClass("btn-light")
      .addClass("btn-success");
    correct++;
  });

  // Question 3
  $(".btn3a, .btn3b, .btn3c").click(function() {
    $(this)
      .removeClass("btn-light")
      .addClass("btn-danger");
    incorrect++;
  });
  $(".btn3d").click(function() {
    $(this)
      .removeClass("btn-light")
      .addClass("btn-success");
    correct++;
  });

  // Question 4
  $(".btn4a, .btn4b, .btn4d").click(function() {
    $(this)
      .removeClass("btn-light")
      .addClass("btn-danger");
    incorrect++;
  });
  $(".btn4c").click(function() {
    $(this)
      .removeClass("btn-light")
      .addClass("btn-success");
    correct++;
  });

  // Question 5
  $(".btn5a, .btn5b, .btn5d").click(function() {
    $(this)
      .removeClass("btn-light")
      .addClass("btn-danger");
    incorrect++;
  });
  $(".btn5c").click(function() {
    $(this)
      .removeClass("btn-light")
      .addClass("btn-success");
    correct++;
  });

  // Question 6
  $(".btn6b, .btn6c, .btn6d").click(function() {
    $(this)
      .removeClass("btn-light")
      .addClass("btn-danger");
    incorrect++;
  });
  $(".btn6a").click(function() {
    $(this)
      .removeClass("btn-light")
      .addClass("btn-success");
    correct++;
  });

  // Question 7
  $(".btn7a, .btn7c, .btn7d").click(function() {
    $(this)
      .removeClass("btn-light")
      .addClass("btn-danger");
    incorrect++;
  });
  $(".btn7b").click(function() {
    $(this)
      .removeClass("btn-light")
      .addClass("btn-success");
    correct++;
  });

  // Question 8
  $(".btn8a, .btn8b, .btn8d").click(function() {
    $(this)
      .removeClass("btn-light")
      .addClass("btn-danger");
    incorrect++;
  });
  $(".btn8c").click(function() {
    $(this)
      .removeClass("btn-light")
      .addClass("btn-success");
    correct++;
  });

  // Question 9
  $(".btn9a, .btn9c, .btn9d").click(function() {
    $(this)
      .removeClass("btn-light")
      .addClass("btn-danger");
    incorrect++;
  });
  $(".btn9b").click(function() {
    $(this)
      .removeClass("btn-light")
      .addClass("btn-success");
    correct++;
  });

  // Question 10
  $(".btn10a, .btn10b, .btn10c").click(function() {
    $(this)
      .removeClass("btn-light")
      .addClass("btn-danger");
    incorrect++;
  });
  $(".btn10d").click(function() {
    $(this)
      .removeClass("btn-light")
      .addClass("btn-success");
    correct++;
  });

  // Restart button
  $(".button-restart").click(function() {
    window.location.reload();
  });

  // Finish Button
  $(".button-finish").click(function() {
    $(".results")
      .html("<h2>Correct: " + correct + "</h2>")
      .append("<h2>Incorrect: " + incorrect + "</h2>");
  });
});
