$(document).ready(function () {

    // ============================================== PROJECTS

    // ==================================== VIDEO CONTROL

    var $videoControl = $("#shownVideo").get(0);
    var $playIcon = $("#playPauseIcon");
    var playIconToggler = true;

    if ($videoControl) {
        $videoControl.loop = true;
    }
    
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
        "FACTURAS SAT",
        "LIRI BOT",
        "BAMAZON",
        "FAMOUS PERSONALITY",
        "BURGER CHALET",
        "TEAM ORGANIZER"
    ];
    var siteLinkArr = [
        "https://elvanrodriguez.github.io/COSMIC-HANGMAN/",
        "https://elvanrodriguez.github.io/RPG-FIGHTING-GAME/",
        "https://elvanrodriguez.github.io/FILM-TRIVIA/",
        "https://elvanrodriguez.github.io/GIF-POKER/",
        "https://elvanrodriguez.github.io/ASSISTANCE-LIST/",
        "https://elvanrodriguez.github.io/YOU-IN-THE-UNIVERSE/",
        "https://elvanrodriguez.github.io/FACTURAS/",
        "https://github.com/ELVANRODRIGUEZ/LIRI-BOT",
        "https://github.com/ELVANRODRIGUEZ/BAMAZON",
        "https://github.com/ELVANRODRIGUEZ/YOUR-FAMOUS-PERSONALITY",
        "https://github.com/ELVANRODRIGUEZ/BURGER",
        "https://github.com/ELVANRODRIGUEZ/PROJECT-2"

    ];
    var siteRepoArr = [
        "https://github.com/ELVANRODRIGUEZ/COSMIC-HANGMAN",
        "https://github.com/ELVANRODRIGUEZ/RPG-FIGHTING-GAME",
        "https://github.com/ELVANRODRIGUEZ/FILM-TRIVIA",
        "https://github.com/ELVANRODRIGUEZ/GIF-POKER",
        "https://github.com/ELVANRODRIGUEZ/ASSISTANCE-LIST",
        "https://github.com/ELVANRODRIGUEZ/YOU-IN-THE-UNIVERSE",
        "https://github.com/ELVANRODRIGUEZ/FACTURAS",
        "https://elvanrodriguez.github.io/LIRI-BOT/",
        "https://elvanrodriguez.github.io/BAMAZON/",
        "https://casual-friend-finder.herokuapp.com/",
        "https://burger-chef.herokuapp.com/",
        "https://team-organizer.herokuapp.com/"

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
        {
            name: "LIRI-BOT",
            repo: "LIRI-BOT_repo"
        },
        {
            name: "BAMAZON",
            repo: "BAMAZON_repo"
        },
        {
            name: "FAMOUS-PERSONALITY",
            repo: "FAMOUS-PERSONALITY_repo"
        },
        {
            name: "BURGER-CHALET",
            repo: "BURGER-CHALET_repo"
        },
        {
            name: "TEAM-ORGANIZER",
            repo: "TEAM-ORGANIZER_repo"
        },
    ];
    var projectVideoArr = [
        "assets/videos/CosmicHangman.mp4",
        "assets/videos/FightingGame.mp4",
        "assets/videos/FilmTrivia.mp4",
        "assets/videos/GifPoker.mp4",
        "assets/videos/AssistanceList.mp4",
        "assets/videos/YouInTheUniverse.mp4",
        "assets/videos/Facturas.mp4",
        "assets/videos/LiriBot.mp4",
        "assets/videos/Bamazon.mp4",
        "assets/videos/FamousPersonality.mp4",
        "assets/videos/BurgerChalet.mp4",
        "assets/videos/TeamOrganizer.mp4"
    ];
    var projectDescriptionArr = [
        "This project is a simple Hangman game with cosmic motives. User is given an Astrophysics related word to guess. Word's number of letters will be the only initial hint at a hand. There is a wrong letter input limit after which the user will lose the game. There is also tracking for won and lost games.",
        "This is a RPG simple fighting game. The catch of this project was more the visual and sound effects added to the interface rather than the functionality, which is as simple as having to press the 'A' button to start attacking the opponent. Once attacker and defender characters are chosen, the user will have to defeat all characters to win. As a new character comes forward, a lower chance to hurt him/her will the user have due to a function that recalculates that chance. Additionally, either a Street Fighter (Guile theme) or a KOF (Terry Bogard KOF '95 theme) will be played depending on the character the user selects as defender.",
        "This is a trivia related to films. The user gets a multiple option quiz in which film related questions will be asked. He/she will have a time limit to answer; if the answer is correct, a short film will be played on th screen, but if it is wrong, no short film will be played but the right answer will be shown, as opposed to not answering at all, in which case the user will not even get the right answer as feedback. At the end, the score will be given to the user.",
        "This web app retrieves gifs from Giphy platform in a poker like fashion. The user needs to input a subject, when it gets shown with a cassino coin below the input box, he/she will have to use that coin to pay a game and be allowed to hit the cards maze, after doing so, 4 results of the input subject will be shown upon the poker table and within the thrown cards. If the user wants to retrieve different results, a new payment will have to be done. The input subjects can be erased from view as well.",
        "This is a very useful web app to take note of assistance at construction sites. It uses Firebase to store the info and allows to enter the worked hours for each day of the week. Two tables are related; 'Trabajadores' table keeps record of all the workers that will be taken assistance from, and 'Lista de rayas' table keeps the assistance list itself. Functionality to keep consistancy in the input form was added, along with 'edition mode' to fixed mistyped info as well 'deletion' option. Automatic operations were added to calculate the worker weekly payment according to the input data.",
        "This is a bootcamp first milestone project. It asks the user to enter birth information to retrieve Wester, Chinese and Egyptian horoscopes. The first one is gotten from an open source API, but the last two are hard coded and thus, they are not dynamic, but date calculations need to be done with MomentJs to link the data, which is stored in Firebase, to the input birth date. Additionally, and more importantly, astronomic informations are given to the user also based on his/her birth data; Last birthday earth pictures; Solar explosions that occurred the closest to the user last decade transition (or birth if he/she is younger than 10 years); Solar and moon info about the user birth date; Closest to earth asteroids at user's birth date; and finally, a set of pictures from NASA's 'Picture of the day' archive. Almost all info is retrieved using different NASA's APIs.",
        "This is very handy web app that takes in an XML Mexican invoice (or a bunch of them) and read through each one to get certain information that is then shown within a table. Info like provider data, fiscal UUID, invoice total ammount, invoice ammount without taxes etc. Additionally, it calculates some more data to show the user how deductible that invoice might be.",
        "LIRI stands for Language Interpretation and Recognition Interface. LIRI-bot is a command line Node based app that takes in certain input and returns data. In this project, LIRI bot will prompt you to search a song or artist on 'Spotify'; a movie on 'OMDB'; a band on 'Bands in Town' for nearby concerts. In order to beautify the input, this app uses the 'inquirer' NPM package. This limits the actions asked to Liri-Bot to the ones it has and none others. Also, it guides the user to type in the second argument needed for the calls to be successful.",
        "'Bamazon' is a command line Node based app that simulates a tiny department sotore database operation. It consists in 3 interfaces to interact with, each one of which is programmed in an individual Javascript file than keeps a connection with a Mysql database using 'mysql' npm package. Those files correspond to different functionalities for the store. The first one is 'manager', that allows to view products, low inventory, add stock, add new products and reset procuts and stock. The second one is 'supervisor', that allows to view sales departments, sales by department and products. The third one is 'customer', that allows to view products and make purchases. it is beautified through 'inquirer' and 'easy-table' npm packages.",
        "'Famous Personality' is a small app that intakes your name and picture address and matches you to some historical character through a 10 questions quizz about yourself. Once the quizz is done, you can submit it to know which of the characters from the database fits your personality the best. Additionally, you can take a look to the characters from the database at the Api link at the bottom of the page.",
        "'Burger Chalet' is a Web app based on 'mysql' program accessed by 'sequelize' npm package at the back-end and 'handlebars' for front-end rendering. It simply allows you to create a burger speciality name that will get stored in the 'order blackboard' once you add it; If you are ready to check it out, then it gets deleted from that blackboard and gets posted on the 'check-out blackboard', from where you can finally pay to take it away and eat it. Additionally, you can step back and rather not to have it by pressing 'Guess not', which will take the burger back to the first blackboard.",
        "Team Organizer is a more complex single based application that runs on node, 'express', 'mysql', 'sequelize', 'passport' and 'handlebars' npm packages. It is an app to manage 'tasks' among a workgroup, each one of which gets related, not just to a 'user' or a bulk of them, but to a 'project', firstly, and a 'category', in second place. In this app, the user can create projects and categories and then start adding tasks to them. The relationships of the tasks made to other users will be shown in those users accounts. It has a strong user authentication first page. Once loggid in, you will be taken to your dashboard from where you can access all the tasks you participate in organized by project and category."
    ]


    next.on("click", function () {
        pauseVideo();

        if (slideCounter == 0) {
            previous.css("visibility", "visible");
            slideCounter++;

        }
        if (slideCounter < 10) {
            slideCounter++;

        } else if (slideCounter == 10) {
            slideCounter++;
            $(this).css("visibility", "hidden");
        }

        $project.text(projectName[slideCounter]);
        $videoControl.pause();
        $("#videoSource").attr("src", projectVideoArr[slideCounter]);
        $videoControl.load();
        $projectDescprition.text(projectDescriptionArr[slideCounter]);
        $siteLink.attr("href", siteLinkArr[slideCounter]);
        $siteRepo.attr("href", siteRepoArr[slideCounter]);
        $siteLink.text(linksArr[slideCounter].name);
        $siteRepo.text(linksArr[slideCounter].repo);

        window.scrollTo(0, 400);

    });

    previous.on("click", function () {
        pauseVideo();

        if (slideCounter == 1) {
            $(this).css("visibility", "hidden");
            slideCounter--;
        }
        if (slideCounter == 11) {
            next.css("visibility", "visible");
            slideCounter--;

        } else if (slideCounter > 1) {
            slideCounter--;
        }

        $project.text(projectName[slideCounter]);
        $videoControl.pause();
        $("#videoSource").attr("src", projectVideoArr[slideCounter]);
        $videoControl.load();
        $projectDescprition.text(projectDescriptionArr[slideCounter]);
        $siteLink.attr("href", siteLinkArr[slideCounter]);
        $siteRepo.attr("href", siteRepoArr[slideCounter]);
        $siteLink.text(linksArr[slideCounter].name);
        $siteRepo.text(linksArr[slideCounter].repo);

        window.scrollTo(0, 400);

    });

});