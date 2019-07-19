// Hiding the quiz until user clicks on "Start Quiz!"
$(function () {
    $(".quiz-start").hide();
});

// Start button
$(".button-start").click(function () {
    $(".quiz-start").show();
})

// Restart button
$(".button-restart").click(function () {
    window.location.reload();
})