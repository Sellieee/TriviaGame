$(document).ready(function () {

    // Hiding the quiz until user clicks on "Start Quiz!"
    $(function () {
        $(".quiz-start").hide();
    });

    // Playing audio when "Start Quiz!" button is clicked
    const sound = new Audio();
    document.getElementById("start").addEventListener("click", playSound);

    function playSound() {
        sound.src = "./assets/theme-song.mp3";
        sound.play();
    }


    // Start button and plays music
    $(".button-start").click(function () {

        $(".quiz-start").show();
        $(".button-start").hide();
    })

    // Restart button
    $(".button-restart").click(function () {
        window.location.reload();
    })
})