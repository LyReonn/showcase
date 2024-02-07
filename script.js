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

    var fileNames = new Array();
    $.ajax({
        url: "/",
        success: function (data) {
            $(data).find("td > a").each(function () {
                if (openFile($(this).attr("href"))) {
                    fileNames.push($(this).attr("href"));
                }
            });
        }
    });
    console.log(fileNames);
}

function openFile(file) {
    var extension = file.substr((file.lastIndexOf('.') + 1));
    switch (extension) {
        case 'mp3':
        case 'mp4':
            return true;
        default:
            return false;
    }
};
