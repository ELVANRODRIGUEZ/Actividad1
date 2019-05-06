$(document).ready(function () {

    // ============================================== PROJECTS

    // ==================================== VIDEO CONTROL

    var $videoControl = $("#shownVideo").get(0);
    var $playIcon = $("#playPauseIcon");
    var playIconToggler = true;

    $videoControl.loop = true;

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
        $videoControl.play();
        playIconToggler = false;
    }

    function pauseVideo() {
        $playIcon.css("visibility", "visible");
        $videoControl.pause();
        playIconToggler = true;
    }


    // ==================================== PROJECT NAVIGATION

    var slideCounter = 0;
    var previous = $("#prev");
    var next = $("#next");
    var $project = $("#projectName");
    var $video = $("#shownVideo");
    var $projectDescprition = $("#projectDescprition");
    var $siteLink = $("#siteLink");
    var $siteRepo = $("#siteRepo");
    var projectName = [
        "COSMIC HANGMAN",
        "RPG FIGHTING GAME",
        "FILM TRIVIA",
        "GIF POKER",
        "ASSISTANCE LIST",
        "YOU IN THE UNIVERSE",
        "FACTURAS SAT"
    ];
    var siteLinkArr = [
        "https://elvanrodriguez.github.io/COSMIC-HANGMAN/",
        "https://elvanrodriguez.github.io/RPG-FIGHTING-GAME/",
        "https://elvanrodriguez.github.io/FILM-TRIVIA/",
        "https://elvanrodriguez.github.io/GIF-POKER/",
        "https://elvanrodriguez.github.io/ASSISTANCE-LIST/",
        "https://elvanrodriguez.github.io/YOU-IN-THE-UNIVERSE/",
        "https://elvanrodriguez.github.io/FACTURAS/"

    ];
    var siteRepoArr = [
        "https://github.com/ELVANRODRIGUEZ/COSMIC-HANGMAN",
        "https://github.com/ELVANRODRIGUEZ/RPG-FIGHTING-GAME",
        "https://github.com/ELVANRODRIGUEZ/FILM-TRIVIA",
        "https://github.com/ELVANRODRIGUEZ/GIF-POKER",
        "https://github.com/ELVANRODRIGUEZ/ASSISTANCE-LIST",
        "https://github.com/ELVANRODRIGUEZ/YOU-IN-THE-UNIVERSE",
        "https://github.com/ELVANRODRIGUEZ/FACTURAS"

    ];
    var linksArr = [{
            name: "COSMIC-HANGMAN",
            repo: "COSMIC-HANGMAN_repo"
        },
        {
            name: "RPG-FIGHTING-GAME",
            repo: "RPG-FIGHTING-GAME_repo"
        },
        {
            name: "FILM-TRIVIA",
            repo: "FILM-TRIVIA_repo"
        },
        {
            name: "GIF-POKER",
            repo: "GIF-POKER_repo"
        },
        {
            name: "ASSISTANCE-LIST",
            repo: "ASSISTANCE-LIST_repo"
        },
        {
            name: "YOU-IN-THE-UNIVERSE",
            repo: "YOU-IN-THE-UNIVERSE_repo"
        },
        {
            name: "FACTURAS",
            repo: "FACTURAS_repo"
        },
    ];
    var projectVideoArr = [
        "assets/videos/CosmicHangman.mp4",
        "assets/videos/CosmicHangman.mp4",
        "assets/videos/CosmicHangman.mp4",
        "assets/videos/CosmicHangman.mp4",
        "assets/videos/CosmicHangman.mp4",
        "assets/videos/CosmicHangman.mp4",
        "assets/videos/CosmicHangman.mp4"
    ];
    var projectDescriptionArr = [
        "This project is a simple Hangman game with cosmic motives. User is given an Astrophysics related word to guess. Word's number of letters will be the only initial hint at a hand. There is a wrong letter input limit after which the user will lose the game. There is also tracking for won and lost games.",
        "This is a RPG simple fighting game. The catch of this project was more the visual and sound effects added to the interface rather than the functionality, which is as simple as having to press the 'A' button to start attacking the opponent. Once attacking and defender characters are chosen, the user will have to defeat all characters to win. As a new character comes forward, a lower chance to hurt him/her will the user have due to a function that recalculates that chance. Additionally, either a Street Fighter (Guile theme) or a KOF (Terry Bogard KOF '95 theme) will be played depending on the character the user selects as defender",
        "This is a trivia related to films. The user gets a multiple option quiz in which film related questions will be asked. He/she will have a time limit to answer; if the answer is correct, a short film will be played on th screen, but if it is wrong, no short film will be played but the right answer will be shown, as opposed to not answering at all, in which case the user will not even get the right answer as feedback. At the end, the score will be given to the user.",
        "This web app retrieves gifs from Giphy platform in a poker like fashion. The user needs to input a subject, when it gets shown with a cassino coin below the input box, he/she will have to use that coin to pay a game and be allowed to hit the cards maze, after doing so, 4 results of the input subject will be shown upon the poker table and within the thrown cards. If the user wants to retrieve different results, a new payment will have to be done. The input subjects can be erased from view as well.",
        "This is a very useful web app to take note of assistance at construction sites. It uses Firebase to store the info and allows to enter the worked hours for each day of the week. Two tables are related; 'Trabajadores' table keeps record of all the workers that will be taken assistance from, and 'Lista de rayas' table keeps the assistance list itself. Functionality to keep consistancy in the input form was added, along with 'edition mode' to fixed mistyped info as well 'deletion' option. Automatic operations were added to calculate the worker weekly payment according to the input data.",
        "This is a bootcamp first milestone project. It asks the user to enter birth information to retrieve Wester, Chinese and Egyptian horoscopes. The first one is gotten from an open source API, but the last two are hard coded and thus, they are not dynamic, but date calculations need to be done with MomentJs to link the data, which is stored in Firebase, to the input birth date. Additionally, and more importantly, astronomic informations are given to the user also based on his/her birth data; Last birthday earth pictures; Solar explosions that occurred the closest to the user last decade transition (or birth if he/she is younger than 10 years); Solar and moon info about the user birth date; Closest to earth asteroids at user's birth date; and finally, a set of pictures from NASA's 'Picture of the day' archive. Almost all info is retrieved using different NASA's APIs.",
        "This is very handy web app that takes in an XML Mexican invoice (or a bunch of them) and read through each one to get certain information that is then shown within a table. Info like provider data, fiscal UUID, invoice total ammount, invoice ammount without taxes etc. Additionally, it calculates some more data to show the user how deductible that invoice might be."
    ]


    next.on("click", function () {
        if (slideCounter == 0) {
            previous.css("opacity", "1");

        }
        if (slideCounter < 5) {
            slideCounter++;

        } else if (slideCounter == 5) {
            slideCounter++;
            $(this).css("opacity", ".25");
        }

        $project.text(projectName[slideCounter]);
        // $video.;
        $projectDescprition.text(projectDescriptionArr[slideCounter]);
        $siteLink.attr("href", siteLinkArr[slideCounter]);
        $siteRepo.attr("href", siteRepoArr[slideCounter]);
        $siteLink.text(linksArr[slideCounter].name);
        $siteRepo.text(linksArr[slideCounter].repo);

        window.scrollTo(0, 400);

    });

    previous.on("click", function () {
        if (slideCounter == 6) {
            next.css("opacity", "1");
            slideCounter--;

        } else if (slideCounter == 1) {
            $(this).css("opacity", ".25");
            slideCounter--;

        } else if (slideCounter > 0) {
            slideCounter--;
        }

        $project.text(projectName[slideCounter]);
        // $video.;
        $projectDescprition.text(projectDescriptionArr[slideCounter]);
        $siteLink.attr("href", siteLinkArr[slideCounter]);
        $siteRepo.attr("href", siteRepoArr[slideCounter]);
        $siteLink.text(linksArr[slideCounter].name);
        $siteRepo.text(linksArr[slideCounter].repo);

        window.scrollTo(0, 400);

    });

});