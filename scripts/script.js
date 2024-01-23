/* Episódios por temporada
1 - 23
2 - 23
3 - 23
4 - 24
5 - 18
6 - 23
7 - 22 */

function gerar() {
    var season = Math.floor(Math.random() * 7) + 1;
    
    switch(season) {
        case (season = 1):
            var episode = Math.floor(Math.random() * 23) + 1;
            break
        case (season = 2):
            var episode = Math.floor(Math.random() * 23) + 1;
            break
        case (season = 3):
            var episode = Math.floor(Math.random() * 23) + 1;
            break
        case (season = 4):
            var episode = Math.floor(Math.random() * 24) + 1;
            break
        case (season = 5):
            var episode = Math.floor(Math.random() * 18) + 1;
            break
        case (season = 6):
            var episode = Math.floor(Math.random() * 23) + 1;
            break
        case (season = 7):
            var episode = Math.floor(Math.random() * 22) + 1;
    }

    // Blocos de episódios
    // Temporada 1
    var s01e01 = window.document.querySelector("div#s01e01");
    var s01e02 = window.document.querySelector("div#s01e02");
    var s01e03 = window.document.querySelector("div#s01e03");
    var s01e04 = window.document.querySelector("div#s01e04");
    var s01e05 = window.document.querySelector("div#s01e05");
    var s01e06 = window.document.querySelector("div#s01e06");
    var s01e07 = window.document.querySelector("div#s01e07");
    var s01e08 = window.document.querySelector("div#s01e08");
    var s01e09 = window.document.querySelector("div#s01e09");
    var s01e10 = window.document.querySelector("div#s01e10");
    var s01e11 = window.document.querySelector("div#s01e11");
    var s01e12 = window.document.querySelector("div#s01e12");
    var s01e13 = window.document.querySelector("div#s01e13");
    var s01e14 = window.document.querySelector("div#s01e14");
    var s01e15 = window.document.querySelector("div#s01e15");
    var s01e16 = window.document.querySelector("div#s01e16");
    var s01e17 = window.document.querySelector("div#s01e17");
    var s01e18 = window.document.querySelector("div#s01e18");
    var s01e19 = window.document.querySelector("div#s01e19");
    var s01e20 = window.document.querySelector("div#s01e20");
    var s01e21 = window.document.querySelector("div#s01e21");
    var s01e22 = window.document.querySelector("div#s01e22");
    var s01e23 = window.document.querySelector("div#s01e23");

    if (season == 1 && episode == 1) {
        s01e01.style.display = "block";
    } else {
        s01e01.style.display = "none";
    }

    if (season == 1 && episode == 2) {
        s01e02.style.display = "block";
    } else {
        s01e02.style.display = "none";
    }

    if (season == 1 && episode == 3) {
        s01e03.style.display = "block";
    } else {
        s01e03.style.display = "none";
    }

    if (season == 1 && episode == 4) {
        s01e04.style.display = "block";
    } else {
        s01e04.style.display = "none";
    }

    if (season == 1 && episode == 5) {
        s01e05.style.display = "block";
    } else {
        s01e05.style.display = "none";
    }

    if (season == 1 && episode == 6) {
        s01e06.style.display = "block";
    } else {
        s01e06.style.display = "none";
    }

    if (season == 1 && episode == 7) {
        s01e07.style.display = "block";
    } else {
        s01e07.style.display = "none";
    }

    if (season == 1 && episode == 8) {
        s01e08.style.display = "block";
    } else {
        s01e08.style.display = "none";
    }

    if (season == 1 && episode == 9) {
        s01e09.style.display = "block";
    } else {
        s01e09.style.display = "none";
    }

    if (season == 1 && episode == 10) {
        s01e10.style.display = "block";
    } else {
        s01e10.style.display = "none";
    }

    if (season == 1 && episode == 11) {
        s01e11.style.display = "block";
    } else {
        s01e11.style.display = "none";
    }

    if (season == 1 && episode == 12) {
        s01e12.style.display = "block";
    } else {
        s01e12.style.display = "none";
    }

    if (season == 1 && episode == 13) {
        s01e13.style.display = "block";
    } else {
        s01e13.style.display = "none";
    }

    if (season == 1 && episode == 14) {
        s01e14.style.display = "block";
    } else {
        s01e14.style.display = "none";
    }

    if (season == 1 && episode == 15) {
        s01e15.style.display = "block";
    } else {
        s01e15.style.display = "none";
    }

    if (season == 1 && episode == 16) {
        s01e16.style.display = "block";
    } else {
        s01e16.style.display = "none";
    }

    if (season == 1 && episode == 17) {
        s01e17.style.display = "block";
    } else {
        s01e17.style.display = "none";
    }

    if (season == 1 && episode == 18) {
        s01e18.style.display = "block";
    } else {
        s01e18.style.display = "none";
    }

    if (season == 1 && episode == 19) {
        s01e19.style.display = "block";
    } else {
        s01e19.style.display = "none";
    }

    if (season == 1 && episode == 20) {
        s01e20.style.display = "block";
    } else {
        s01e20.style.display = "none";
    }

    if (season == 1 && episode == 21) {
        s01e21.style.display = "block";
    } else {
        s01e21.style.display = "none";
    }

    if (season == 1 && episode == 22) {
        s01e22.style.display = "block";
    } else {
        s01e22.style.display = "none";
    }

    if (season == 1 && episode == 23) {
        s01e23.style.display = "block";
    } else {
        s01e23.style.display = "none";
    }

    // Temporada 2
    var s02e01 = window.document.querySelector("div#s02e01");
    var s02e02 = window.document.querySelector("div#s02e02");
    var s02e03 = window.document.querySelector("div#s02e03");
    var s02e04 = window.document.querySelector("div#s02e04");
    var s02e05 = window.document.querySelector("div#s02e05");
    var s02e06 = window.document.querySelector("div#s02e06");
    var s02e07 = window.document.querySelector("div#s02e07");
    var s02e08 = window.document.querySelector("div#s02e08");
    var s02e09 = window.document.querySelector("div#s02e09");
    var s02e10 = window.document.querySelector("div#s02e10");
    var s02e11 = window.document.querySelector("div#s02e11");
    var s02e12 = window.document.querySelector("div#s02e12");
    var s02e13 = window.document.querySelector("div#s02e13");
    var s02e14 = window.document.querySelector("div#s02e14");
    var s02e15 = window.document.querySelector("div#s02e15");
    var s02e16 = window.document.querySelector("div#s02e16");
    var s02e17 = window.document.querySelector("div#s02e17");
    var s02e18 = window.document.querySelector("div#s02e18");
    var s02e19 = window.document.querySelector("div#s02e19");
    var s02e20 = window.document.querySelector("div#s02e20");
    var s02e21 = window.document.querySelector("div#s02e21");
    var s02e22 = window.document.querySelector("div#s02e22");
    var s02e23 = window.document.querySelector("div#s02e23");

    if (season == 2 && episode == 1) {
        s02e01.style.display = "block";
    } else {
        s02e01.style.display = "none";
    }

    if (season == 2 && episode == 2) {
        s02e02.style.display = "block";
    } else {
        s02e02.style.display = "none";
    }

    if (season == 2 && episode == 3) {
        s02e03.style.display = "block";
    } else {
        s02e03.style.display = "none";
    }

    if (season == 2 && episode == 4) {
        s02e04.style.display = "block";
    } else {
        s02e04.style.display = "none";
    }

    if (season == 2 && episode == 5) {
        s02e05.style.display = "block";
    } else {
        s02e05.style.display = "none";
    }

    if (season == 2 && episode == 6) {
        s02e06.style.display = "block";
    } else {
        s02e06.style.display = "none";
    }

    if (season == 2 && episode == 7) {
        s02e07.style.display = "block";
    } else {
        s02e07.style.display = "none";
    }

    if (season == 2 && episode == 8) {
        s02e08.style.display = "block";
    } else {
        s02e08.style.display = "none";
    }

    if (season == 2 && episode == 9) {
        s02e09.style.display = "block";
    } else {
        s02e09.style.display = "none";
    }

    if (season == 2 && episode == 10) {
        s02e10.style.display = "block";
    } else {
        s02e10.style.display = "none";
    }

    if (season == 2 && episode == 11) {
        s02e11.style.display = "block";
    } else {
        s02e11.style.display = "none";
    }

    if (season == 2 && episode == 12) {
        s02e12.style.display = "block";
    } else {
        s02e12.style.display = "none";
    }

    if (season == 2 && episode == 13) {
        s02e13.style.display = "block";
    } else {
        s02e13.style.display = "none";
    }

    if (season == 2 && episode == 14) {
        s02e14.style.display = "block";
    } else {
        s02e14.style.display = "none";
    }

    if (season == 2 && episode == 15) {
        s02e15.style.display = "block";
    } else {
        s02e15.style.display = "none";
    }

    if (season == 2 && episode == 16) {
        s02e16.style.display = "block";
    } else {
        s02e16.style.display = "none";
    }

    if (season == 2 && episode == 17) {
        s02e17.style.display = "block";
    } else {
        s02e17.style.display = "none";
    }

    if (season == 2 && episode == 18) {
        s02e18.style.display = "block";
    } else {
        s02e18.style.display = "none";
    }

    if (season == 2 && episode == 19) {
        s02e19.style.display = "block";
    } else {
        s02e19.style.display = "none";
    }

    if (season == 2 && episode == 20) {
        s02e20.style.display = "block";
    } else {
        s02e20.style.display = "none";
    }

    if (season == 2 && episode == 21) {
        s02e21.style.display = "block";
    } else {
        s02e21.style.display = "none";
    }

    if (season == 2 && episode == 22) {
        s02e22.style.display = "block";
    } else {
        s02e22.style.display = "none";
    }

    if (season == 2 && episode == 23) {
        s02e23.style.display = "block";
    } else {
        s02e23.style.display = "none";
    }

    // Temporada 3
    var s03e01 = window.document.querySelector("div#s03e01");
    var s03e02 = window.document.querySelector("div#s03e02");
    var s03e03 = window.document.querySelector("div#s03e03");
    var s03e04 = window.document.querySelector("div#s03e04");
    var s03e05 = window.document.querySelector("div#s03e05");
    var s03e06 = window.document.querySelector("div#s03e06");
    var s03e07 = window.document.querySelector("div#s03e07");
    var s03e08 = window.document.querySelector("div#s03e08");
    var s03e09 = window.document.querySelector("div#s03e09");
    var s03e10 = window.document.querySelector("div#s03e10");
    var s03e11 = window.document.querySelector("div#s03e11");
    var s03e12 = window.document.querySelector("div#s03e12");
    var s03e13 = window.document.querySelector("div#s03e13");
    var s03e14 = window.document.querySelector("div#s03e14");
    var s03e15 = window.document.querySelector("div#s03e15");
    var s03e16 = window.document.querySelector("div#s03e16");
    var s03e17 = window.document.querySelector("div#s03e17");
    var s03e18 = window.document.querySelector("div#s03e18");
    var s03e19 = window.document.querySelector("div#s03e19");
    var s03e20 = window.document.querySelector("div#s03e20");
    var s03e21 = window.document.querySelector("div#s03e21");
    var s03e22 = window.document.querySelector("div#s03e22");
    var s03e23 = window.document.querySelector("div#s03e23");

    if (season == 3 && episode == 1) {
        s03e01.style.display = "block";
    } else {
        s03e01.style.display = "none";
    }

    if (season == 3 && episode == 2) {
        s03e02.style.display = "block";
    } else {
        s03e02.style.display = "none";
    }

    if (season == 3 && episode == 3) {
        s03e03.style.display = "block";
    } else {
        s03e03.style.display = "none";
    }

    if (season == 3 && episode == 4) {
        s03e04.style.display = "block";
    } else {
        s03e04.style.display = "none";
    }

    if (season == 3 && episode == 5) {
        s03e05.style.display = "block";
    } else {
        s03e05.style.display = "none";
    }

    if (season == 3 && episode == 6) {
        s03e06.style.display = "block";
    } else {
        s03e06.style.display = "none";
    }

    if (season == 3 && episode == 7) {
        s03e07.style.display = "block";
    } else {
        s03e07.style.display = "none";
    }

    if (season == 3 && episode == 8) {
        s03e08.style.display = "block";
    } else {
        s03e08.style.display = "none";
    }

    if (season == 3 && episode == 9) {
        s03e09.style.display = "block";
    } else {
        s03e09.style.display = "none";
    }

    if (season == 3 && episode == 10) {
        s03e10.style.display = "block";
    } else {
        s03e10.style.display = "none";
    }

    if (season == 3 && episode == 11) {
        s03e11.style.display = "block";
    } else {
        s03e11.style.display = "none";
    }

    if (season == 3 && episode == 12) {
        s03e12.style.display = "block";
    } else {
        s03e12.style.display = "none";
    }

    if (season == 3 && episode == 13) {
        s03e13.style.display = "block";
    } else {
        s03e13.style.display = "none";
    }

    if (season == 3 && episode == 14) {
        s03e14.style.display = "block";
    } else {
        s03e14.style.display = "none";
    }

    if (season == 3 && episode == 15) {
        s03e15.style.display = "block";
    } else {
        s03e15.style.display = "none";
    }

    if (season == 3 && episode == 16) {
        s03e16.style.display = "block";
    } else {
        s03e16.style.display = "none";
    }

    if (season == 3 && episode == 17) {
        s03e17.style.display = "block";
    } else {
        s03e17.style.display = "none";
    }

    if (season == 3 && episode == 18) {
        s03e18.style.display = "block";
    } else {
        s03e18.style.display = "none";
    }

    if (season == 3 && episode == 19) {
        s03e19.style.display = "block";
    } else {
        s03e19.style.display = "none";
    }

    if (season == 3 && episode == 20) {
        s03e20.style.display = "block";
    } else {
        s03e20.style.display = "none";
    }

    if (season == 3 && episode == 21) {
        s03e21.style.display = "block";
    } else {
        s03e21.style.display = "none";
    }

    if (season == 3 && episode == 22) {
        s03e22.style.display = "block";
    } else {
        s03e22.style.display = "none";
    }

    if (season == 3 && episode == 23) {
        s03e23.style.display = "block";
    } else {
        s03e23.style.display = "none";
    }

    // Temporada 4
    var s04e01 = window.document.querySelector("div#s04e01");
    var s04e02 = window.document.querySelector("div#s04e02");
    var s04e03 = window.document.querySelector("div#s04e03");
    var s04e04 = window.document.querySelector("div#s04e04");
    var s04e05 = window.document.querySelector("div#s04e05");
    var s04e06 = window.document.querySelector("div#s04e06");
    var s04e07 = window.document.querySelector("div#s04e07");
    var s04e08 = window.document.querySelector("div#s04e08");
    var s04e09 = window.document.querySelector("div#s04e09");
    var s04e10 = window.document.querySelector("div#s04e10");
    var s04e11 = window.document.querySelector("div#s04e11");
    var s04e12 = window.document.querySelector("div#s04e12");
    var s04e13 = window.document.querySelector("div#s04e13");
    var s04e14 = window.document.querySelector("div#s04e14");
    var s04e15 = window.document.querySelector("div#s04e15");
    var s04e16 = window.document.querySelector("div#s04e16");
    var s04e17 = window.document.querySelector("div#s04e17");
    var s04e18 = window.document.querySelector("div#s04e18");
    var s04e19 = window.document.querySelector("div#s04e19");
    var s04e20 = window.document.querySelector("div#s04e20");
    var s04e21 = window.document.querySelector("div#s04e21");
    var s04e22 = window.document.querySelector("div#s04e22");
    var s04e23 = window.document.querySelector("div#s04e23");
    var s04e24 = window.document.querySelector("div#s04e24");

    if (season == 4 && episode == 1) {
        s04e01.style.display = "block";
    } else {
        s04e01.style.display = "none";
    }

    if (season == 4 && episode == 2) {
        s04e02.style.display = "block";
    } else {
        s04e02.style.display = "none";
    }

    if (season == 4 && episode == 3) {
        s04e03.style.display = "block";
    } else {
        s04e03.style.display = "none";
    }

    if (season == 4 && episode == 4) {
        s04e04.style.display = "block";
    } else {
        s04e04.style.display = "none";
    }

    if (season == 4 && episode == 5) {
        s04e05.style.display = "block";
    } else {
        s04e05.style.display = "none";
    }

    if (season == 4 && episode == 6) {
        s04e06.style.display = "block";
    } else {
        s04e06.style.display = "none";
    }

    if (season == 4 && episode == 7) {
        s04e07.style.display = "block";
    } else {
        s04e07.style.display = "none";
    }

    if (season == 4 && episode == 8) {
        s04e08.style.display = "block";
    } else {
        s04e08.style.display = "none";
    }

    if (season == 4 && episode == 9) {
        s04e09.style.display = "block";
    } else {
        s04e09.style.display = "none";
    }

    if (season == 4 && episode == 10) {
        s04e10.style.display = "block";
    } else {
        s04e10.style.display = "none";
    }

    if (season == 4 && episode == 11) {
        s04e11.style.display = "block";
    } else {
        s04e11.style.display = "none";
    }

    if (season == 4 && episode == 12) {
        s04e12.style.display = "block";
    } else {
        s04e12.style.display = "none";
    }

    if (season == 4 && episode == 13) {
        s04e13.style.display = "block";
    } else {
        s04e13.style.display = "none";
    }

    if (season == 4 && episode == 14) {
        s04e14.style.display = "block";
    } else {
        s04e14.style.display = "none";
    }

    if (season == 4 && episode == 15) {
        s04e15.style.display = "block";
    } else {
        s04e15.style.display = "none";
    }

    if (season == 4 && episode == 16) {
        s04e16.style.display = "block";
    } else {
        s04e16.style.display = "none";
    }

    if (season == 4 && episode == 17) {
        s04e17.style.display = "block";
    } else {
        s04e17.style.display = "none";
    }

    if (season == 4 && episode == 18) {
        s04e18.style.display = "block";
    } else {
        s04e18.style.display = "none";
    }

    if (season == 4 && episode == 19) {
        s04e19.style.display = "block";
    } else {
        s04e19.style.display = "none";
    }

    if (season == 4 && episode == 20) {
        s04e20.style.display = "block";
    } else {
        s04e20.style.display = "none";
    }

    if (season == 4 && episode == 21) {
        s04e21.style.display = "block";
    } else {
        s04e21.style.display = "none";
    }

    if (season == 4 && episode == 22) {
        s04e22.style.display = "block";
    } else {
        s04e22.style.display = "none";
    }

    if (season == 4 && episode == 23) {
        s04e23.style.display = "block";
    } else {
        s04e23.style.display = "none";
    }

    if (season == 4 && episode == 24) {
        s04e23.style.display = "block";
    } else {
        s04e23.style.display = "none";
    }

    // Temporada 5
    var s05e01 = window.document.querySelector("div#s05e01");
    var s05e02 = window.document.querySelector("div#s05e02");
    var s05e03 = window.document.querySelector("div#s05e03");
    var s05e04 = window.document.querySelector("div#s05e04");
    var s05e05 = window.document.querySelector("div#s05e05");
    var s05e06 = window.document.querySelector("div#s05e06");
    var s05e07 = window.document.querySelector("div#s05e07");
    var s05e08 = window.document.querySelector("div#s05e08");
    var s05e09 = window.document.querySelector("div#s05e09");
    var s05e10 = window.document.querySelector("div#s05e10");
    var s05e11 = window.document.querySelector("div#s05e11");
    var s05e12 = window.document.querySelector("div#s05e12");
    var s05e13 = window.document.querySelector("div#s05e13");
    var s05e14 = window.document.querySelector("div#s05e14");
    var s05e15 = window.document.querySelector("div#s05e15");
    var s05e16 = window.document.querySelector("div#s05e16");
    var s05e17 = window.document.querySelector("div#s05e17");
    var s05e18 = window.document.querySelector("div#s05e18");

    if (season == 5 && episode == 1) {
        s05e01.style.display = "block";
    } else {
        s05e01.style.display = "none";
    }

    if (season == 5 && episode == 2) {
        s05e02.style.display = "block";
    } else {
        s05e02.style.display = "none";
    }

    if (season == 5 && episode == 3) {
        s05e03.style.display = "block";
    } else {
        s05e03.style.display = "none";
    }

    if (season == 5 && episode == 4) {
        s05e04.style.display = "block";
    } else {
        s05e04.style.display = "none";
    }

    if (season == 5 && episode == 5) {
        s05e05.style.display = "block";
    } else {
        s05e05.style.display = "none";
    }

    if (season == 5 && episode == 6) {
        s05e06.style.display = "block";
    } else {
        s05e06.style.display = "none";
    }

    if (season == 5 && episode == 7) {
        s05e07.style.display = "block";
    } else {
        s05e07.style.display = "none";
    }

    if (season == 5 && episode == 8) {
        s05e08.style.display = "block";
    } else {
        s05e08.style.display = "none";
    }

    if (season == 5 && episode == 9) {
        s05e09.style.display = "block";
    } else {
        s05e09.style.display = "none";
    }

    if (season == 5 && episode == 10) {
        s05e10.style.display = "block";
    } else {
        s05e10.style.display = "none";
    }

    if (season == 5 && episode == 11) {
        s05e11.style.display = "block";
    } else {
        s05e11.style.display = "none";
    }

    if (season == 5 && episode == 12) {
        s05e12.style.display = "block";
    } else {
        s05e12.style.display = "none";
    }

    if (season == 5 && episode == 13) {
        s05e13.style.display = "block";
    } else {
        s05e13.style.display = "none";
    }

    if (season == 5 && episode == 14) {
        s05e14.style.display = "block";
    } else {
        s05e14.style.display = "none";
    }

    if (season == 5 && episode == 15) {
        s05e15.style.display = "block";
    } else {
        s05e15.style.display = "none";
    }

    if (season == 5 && episode == 16) {
        s05e16.style.display = "block";
    } else {
        s05e16.style.display = "none";
    }

    if (season == 5 && episode == 17) {
        s05e17.style.display = "block";
    } else {
        s05e17.style.display = "none";
    }

    if (season == 5 && episode == 18) {
        s05e18.style.display = "block";
    } else {
        s05e18.style.display = "none";
    }

    // Temporada 6
    var s06e01 = window.document.querySelector("div#s06e01");
    var s06e02 = window.document.querySelector("div#s06e02");
    var s06e03 = window.document.querySelector("div#s06e03");
    var s06e04 = window.document.querySelector("div#s06e04");
    var s06e05 = window.document.querySelector("div#s06e05");
    var s06e06 = window.document.querySelector("div#s06e06");
    var s06e07 = window.document.querySelector("div#s06e07");
    var s06e08 = window.document.querySelector("div#s06e08");
    var s06e09 = window.document.querySelector("div#s06e09");
    var s06e10 = window.document.querySelector("div#s06e10");
    var s06e11 = window.document.querySelector("div#s06e11");
    var s06e12 = window.document.querySelector("div#s06e12");
    var s06e13 = window.document.querySelector("div#s06e13");
    var s06e14 = window.document.querySelector("div#s06e14");
    var s06e15 = window.document.querySelector("div#s06e15");
    var s06e16 = window.document.querySelector("div#s06e16");
    var s06e17 = window.document.querySelector("div#s06e17");
    var s06e18 = window.document.querySelector("div#s06e18");
    var s06e19 = window.document.querySelector("div#s06e19");
    var s06e20 = window.document.querySelector("div#s06e20");
    var s06e21 = window.document.querySelector("div#s06e21");
    var s06e22 = window.document.querySelector("div#s06e22");
    var s06e23 = window.document.querySelector("div#s06e23");

    if (season == 6 && episode == 1) {
        s06e01.style.display = "block";
    } else {
        s06e01.style.display = "none";
    }

    if (season == 6 && episode == 2) {
        s06e02.style.display = "block";
    } else {
        s06e02.style.display = "none";
    }

    if (season == 6 && episode == 3) {
        s06e03.style.display = "block";
    } else {
        s06e03.style.display = "none";
    }

    if (season == 6 && episode == 4) {
        s06e04.style.display = "block";
    } else {
        s06e04.style.display = "none";
    }

    if (season == 6 && episode == 5) {
        s06e05.style.display = "block";
    } else {
        s06e05.style.display = "none";
    }

    if (season == 6 && episode == 6) {
        s06e06.style.display = "block";
    } else {
        s06e06.style.display = "none";
    }

    if (season == 6 && episode == 7) {
        s06e07.style.display = "block";
    } else {
        s06e07.style.display = "none";
    }

    if (season == 6 && episode == 8) {
        s06e08.style.display = "block";
    } else {
        s06e08.style.display = "none";
    }

    if (season == 6 && episode == 9) {
        s06e09.style.display = "block";
    } else {
        s06e09.style.display = "none";
    }

    if (season == 6 && episode == 10) {
        s06e10.style.display = "block";
    } else {
        s06e10.style.display = "none";
    }

    if (season == 6 && episode == 11) {
        s06e11.style.display = "block";
    } else {
        s06e11.style.display = "none";
    }

    if (season == 6 && episode == 12) {
        s06e12.style.display = "block";
    } else {
        s06e12.style.display = "none";
    }

    if (season == 6 && episode == 13) {
        s06e13.style.display = "block";
    } else {
        s06e13.style.display = "none";
    }

    if (season == 6 && episode == 14) {
        s06e14.style.display = "block";
    } else {
        s06e14.style.display = "none";
    }

    if (season == 6 && episode == 15) {
        s06e15.style.display = "block";
    } else {
        s06e15.style.display = "none";
    }

    if (season == 6 && episode == 16) {
        s06e16.style.display = "block";
    } else {
        s06e16.style.display = "none";
    }

    if (season == 6 && episode == 17) {
        s06e17.style.display = "block";
    } else {
        s06e17.style.display = "none";
    }

    if (season == 6 && episode == 18) {
        s06e18.style.display = "block";
    } else {
        s06e18.style.display = "none";
    }

    if (season == 6 && episode == 19) {
        s06e19.style.display = "block";
    } else {
        s06e19.style.display = "none";
    }

    if (season == 6 && episode == 20) {
        s06e20.style.display = "block";
    } else {
        s06e20.style.display = "none";
    }

    if (season == 6 && episode == 21) {
        s06e21.style.display = "block";
    } else {
        s06e21.style.display = "none";
    }

    if (season == 6 && episode == 22) {
        s06e22.style.display = "block";
    } else {
        s06e22.style.display = "none";
    }

    if (season == 6 && episode == 23) {
        s06e23.style.display = "block";
    } else {
        s06e23.style.display = "none";
    }

    // Temporada 7
    var s07e01 = window.document.querySelector("div#s07e01");
    var s07e02 = window.document.querySelector("div#s07e02");
    var s07e03 = window.document.querySelector("div#s07e03");
    var s07e04 = window.document.querySelector("div#s07e04");
    var s07e05 = window.document.querySelector("div#s07e05");
    var s07e06 = window.document.querySelector("div#s07e06");
    var s07e07 = window.document.querySelector("div#s07e07");
    var s07e08 = window.document.querySelector("div#s07e08");
    var s07e09 = window.document.querySelector("div#s07e09");
    var s07e10 = window.document.querySelector("div#s07e10");
    var s07e11 = window.document.querySelector("div#s07e11");
    var s07e12 = window.document.querySelector("div#s07e12");
    var s07e13 = window.document.querySelector("div#s07e13");
    var s07e14 = window.document.querySelector("div#s07e14");
    var s07e15 = window.document.querySelector("div#s07e15");
    var s07e16 = window.document.querySelector("div#s07e16");
    var s07e17 = window.document.querySelector("div#s07e17");
    var s07e18 = window.document.querySelector("div#s07e18");
    var s07e19 = window.document.querySelector("div#s07e19");
    var s07e20 = window.document.querySelector("div#s07e20");
    var s07e21 = window.document.querySelector("div#s07e21");
    var s07e22 = window.document.querySelector("div#s07e22");

    if (season == 7 && episode == 1) {
        s07e01.style.display = "block";
    } else {
        s07e01.style.display = "none";
    }

    if (season == 7 && episode == 2) {
        s07e02.style.display = "block";
    } else {
        s07e02.style.display = "none";
    }

    if (season == 7 && episode == 3) {
        s07e03.style.display = "block";
    } else {
        s07e03.style.display = "none";
    }

    if (season == 7 && episode == 4) {
        s07e04.style.display = "block";
    } else {
        s07e04.style.display = "none";
    }

    if (season == 7 && episode == 5) {
        s07e05.style.display = "block";
    } else {
        s07e05.style.display = "none";
    }

    if (season == 7 && episode == 6) {
        s07e06.style.display = "block";
    } else {
        s07e06.style.display = "none";
    }

    if (season == 7 && episode == 7) {
        s07e07.style.display = "block";
    } else {
        s07e07.style.display = "none";
    }

    if (season == 7 && episode == 8) {
        s07e08.style.display = "block";
    } else {
        s07e08.style.display = "none";
    }

    if (season == 7 && episode == 9) {
        s07e09.style.display = "block";
    } else {
        s07e09.style.display = "none";
    }

    if (season == 7 && episode == 10) {
        s07e10.style.display = "block";
    } else {
        s07e10.style.display = "none";
    }

    if (season == 7 && episode == 11) {
        s07e11.style.display = "block";
    } else {
        s07e11.style.display = "none";
    }

    if (season == 7 && episode == 12) {
        s07e12.style.display = "block";
    } else {
        s07e12.style.display = "none";
    }

    if (season == 7 && episode == 13) {
        s07e13.style.display = "block";
    } else {
        s07e13.style.display = "none";
    }

    if (season == 7 && episode == 14) {
        s07e14.style.display = "block";
    } else {
        s07e14.style.display = "none";
    }

    if (season == 7 && episode == 15) {
        s07e15.style.display = "block";
    } else {
        s07e15.style.display = "none";
    }

    if (season == 7 && episode == 16) {
        s07e16.style.display = "block";
    } else {
        s07e16.style.display = "none";
    }

    if (season == 7 && episode == 17) {
        s07e17.style.display = "block";
    } else {
        s07e17.style.display = "none";
    }

    if (season == 7 && episode == 18) {
        s07e18.style.display = "block";
    } else {
        s07e18.style.display = "none";
    }

    if (season == 7 && episode == 19) {
        s07e19.style.display = "block";
    } else {
        s07e19.style.display = "none";
    }

    if (season == 7 && episode == 20) {
        s07e20.style.display = "block";
    } else {
        s07e20.style.display = "none";
    }

    if (season == 7 && episode == 21) {
        s07e21.style.display = "block";
    } else {
        s07e21.style.display = "none";
    }

    if (season == 7 && episode == 22) {
        s07e22.style.display = "block";
    } else {
        s07e22.style.display = "none";
    }
}

