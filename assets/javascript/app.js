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

  var count = 120;
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

  function playSound() {
    sound.src = "./assets/theme-song.mp3";
    sound.play();
  }

  // Hide start button to reveal quiz
  $(".button-start").click(function() {
    $(".quiz-start").show();
    $(".button-start").hide();

    run();

    var correct = 0;
    var incorrect = 0;

    // Question 1
    $(".btn1a, .btn1b, .btn1d").click(function() {
      $(this)
        .removeClass("btn-light")
        .addClass("btn-danger");
      incorrect++;
    });
    $(".btn1c").click(function() {
      $(this)
        .removeClass("btn-light")
        .addClass("btn-success");
      correct++;
    });
    var qone = $(".btn1a, .btn1b, .btn1c, .btn1d");
    qone.click(function() {
      qone.prop("disabled", true);
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
    var qtwo = $(".btn2a, .btn2b, .btn2c, .btn2d");
    qtwo.click(function() {
      qtwo.prop("disabled", true);
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
    var qthree = $(".btn3a, .btn3b, .btn3c, .btn3d");
    qthree.click(function() {
      qthree.prop("disabled", true);
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
    var qfour = $(".btn4a, .btn4b, .btn4c, .btn4d");
    qfour.click(function() {
      qfour.prop("disabled", true);
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
    var qfive = $(".btn5a, .btn5b, .btn5c, .btn5d");
    qfive.click(function() {
      qfive.prop("disabled", true);
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
    var qsix = $(".btn6a, .btn6b, .btn6c, .btn6d");
    qsix.click(function() {
      qsix.prop("disabled", true);
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
    var qseven = $(".btn7a, .btn7b, .btn7c, .btn7d");
    qseven.click(function() {
      qseven.prop("disabled", true);
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
    var qeight = $(".btn8a, .btn8b, .btn8c, .btn8d");
    qeight.click(function() {
      qeight.prop("disabled", true);
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
    var qnine = $(".btn9a, .btn9b, .btn9c, .btn9d");
    qnine.click(function() {
      qnine.prop("disabled", true);
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
    var qten = $(".btn10a, .btn10b, .btn10c, .btn10d");
    qten.click(function() {
      qten.prop("disabled", true);
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
      stop();
    });
  });
});
