"use strict";

window.onload = function () {
    var playlist = document.getElementById("playlist");
    var tracks = new Array();
    for (var n = 0; n < 10; n++) {
        tracks[n] = document.createElement("div");
        tracks[n].className = "tracks";
        tracks[n].innerHTML = n;
        playlist.appendChild(tracks[n]);
    }

}

$(document).ready(function () {
    $.get("./media", function (allFiles) {
        $("#fileNames").append(allFiles);
        console.log(allFiles);
    });
})