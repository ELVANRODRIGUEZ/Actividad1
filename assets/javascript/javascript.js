$(document).ready(function () {

    // ============================================== PROJECTS

    // ==================================== VIDEO CONTROL

    var $video = $("#shownVideo").get(0);
    var $playIcon = $("#playPauseIcon");
    var playIconToggler = true;

    $video.loop = true;

    $playIcon.on("click", function () {
        if (playIconToggler) {
            playVideo();

        }
    })

    $("#shownVideo").on("click", function () {
        if (playIconToggler) {
            playVideo();
        } else {
            pauseVideo();
        }
    })

    function playVideo() {
        $playIcon.css("visibility", "hidden");
        $video.play();
        playIconToggler = false;
    }

    function pauseVideo() {
        $playIcon.css("visibility", "visible");
        $video.pause();
        playIconToggler = true;
    }


    // ==================================== PROJECT NAVIGATION

    var slideCounter = 0;
    var previous = $("#prev");
    var next = $("#next");


    next.on("click", function () {
        if (slideCounter == 0) {
            previous.css("opacity", "1");

        }
        if (slideCounter < 5) {
            slideCounter++;

        } else if (slideCounter == 5 ) {
            slideCounter++;
            $(this).css("opacity", ".25");
        }
        console.log(slideCounter);
    });

    previous.on("click", function() {
        if (slideCounter == 6) {
            next.css("opacity", "1");
            slideCounter--;

        } else if (slideCounter == 1) {
            $(this).css("opacity", ".25");
            slideCounter--;

        } else if (slideCounter > 0 ) {
            slideCounter--;
        }
        console.log(slideCounter);
    });

});