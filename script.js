$(document).ready(function () {
    var makeItRain = function () {
        //clear out everything
        $('.rain').empty();

        var increment = 0;
        var drops = "";
        var backDrops = "";

        while (increment < 100) {
            //couple random numbers to use for various randomizations
            //random number between 98 and 1
            var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
            //random number between 5 and 2
            var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
            //increment
            increment += randoFiver;
            //add in a new raindrop with various randomizations to certain CSS properties
            drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
            backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
        }

        $('.rain.front-row').append(drops);
        $('.rain.back-row').append(backDrops);
    };

    var i = 0;
    var id = 'demo';
    var txt = 'Hiii!!';
    var count = 0

    function writeMyStuff() {
        if (document.getElementById(id).innerHTML == txt && count == 0) {
            console.log('done');
            count++;
            i = 0;
            id = 'line1';
            txt = "It's sad here. I haven't made my website yet.";
        }
        if (document.getElementById(id).innerHTML == txt && count == 1) {
            console.log('done');
            count++;
            i = 0;
            id = 'line2';
            txt = "You can still take a look at my resume.";
        }
        if (document.getElementById(id).innerHTML == txt && count == 2) {
            document.getElementById('resume_down').style.visibility = 'visible';
        }
        if (i < txt.length) {
            document.getElementById(id).innerHTML += txt.charAt(i);
            i++;
            setTimeout(writeMyStuff, 50);
        }

    }

    makeItRain();
    writeMyStuff();

});