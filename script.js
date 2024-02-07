"use strict";

window.onload = function () {
    var fs = require('fs');
    var files = fs.readdirSync("./media/");
    console.log(files[0]);

    var playlist = document.getElementById("playlist");
    var tracks = new Array();
    for (var n = 0; n < 5; n++) {
        tracks[n] = document.createElement("div");
        tracks[n].className = "tracks";
        tracks[n].innerHTML = n;
        playlist.appendChild(tracks[n]);
    }
}
