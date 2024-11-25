$(document).ready(function () {

   // ==================================== NAVEGACIÓN

    var slideCounter = 0;
    var previous = $("#prev");
    var next = $("#next");
  
    var $siteLink = $("#siteLink");

    var projectName = [
        "CAMARGO",
        "QUEBRACHO",
        "OXFORD"
    ];

    var siteLinkArr = [
        "https://www.instagram.com/p/CQG6t6EDKlr/",
        "https://www.instagram.com/p/COQbiKvDdxN/",
        "https://www.instagram.com/p/CPrCckRD6BT/"

    ];

    var linksArr = [{
            name: "CAMARGO"
        },
        {
            name: "QUEBRACHO"
        },
        {
            name: "OXFORD"
        }
    ];

    var projectDescriptionArr = [
        "Anclado en la zona Condesa de la ciudad, este edificio cuenta con 4 departamentos con un estilo industrial donde la combinación madera-concreto brindan un ambiente elegante y acogedor. Terminada en 2020, es una obra residencial que ha sido muy bienvenida por el mercado.",
        "Este restaurante uruguayo es un referente de la venta de cortes de res en la industria restaurantera local. Tiene un estilo de hacienda renovada con abundante carpintería como medio directo entre el usuario y el espacio.",
        "Se trata de un proyecto para el alojamiento de corta estancia en el corazón corporativo de la Ciudad de México. Su decoración interior es sumamente acogedora y, en combinación con su privilegiada locación, hace del lugar una excelente opción para quien trabaja en la zona."
    ]

    var projectImage = [
        "assets/images/Camargo.png",
        "assets/images/Quebracho.png",
        "assets/images/Oxford.png"
    ];

    next.on("click", function () {

        if (slideCounter == 0) {
            previous.css("visibility", "visible");
            slideCounter++;

        } else if (slideCounter == 1) {
            slideCounter++;
            $(this).css("visibility", "hidden");

        }

        $("#projectName").text(projectName[slideCounter]);
        $("#projImage").attr('src', projectImage[slideCounter]);

        $("#projectDescprition").text(projectDescriptionArr[slideCounter]);
        $("#siteLink").attr("href", siteLinkArr[slideCounter]);

        $("#siteLink").text(linksArr[slideCounter].name);


        window.scrollTo(0, 400);
    });

    previous.on("click", function () {

        if (slideCounter == 1) {
            $(this).css("visibility", "hidden");
            slideCounter--;
        }else if (slideCounter == 2) {
            next.css("visibility", "visible");
            slideCounter--;

        }

        $("#projectName").text(projectName[slideCounter]);
        $("#projImage").attr('src', projectImage[slideCounter]);

        $("#projectDescprition").text(projectDescriptionArr[slideCounter]);
        $("#siteLink").attr("href", siteLinkArr[slideCounter]);

        $("#siteLink").text(linksArr[slideCounter].name);


        window.scrollTo(0, 400);
    });

});