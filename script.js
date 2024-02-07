"use strict";

var tracks = [];

window.onload = function () {
    var playlist = document.getElementById("playlist");
    
    fetch("./filelist.json")
        .then((response) => response.json())
        .then((jsondata) => writeplaylist(jsondata, playlist));

    // var url = "https://api.github.com/repos/lyreonn/showcase/contents/assets/showcase/";
    // (async () => {
    //     const response = await fetch(url);
    //     const jsondata = await response.json();
    //     writeplaylist(jsondata, playlist);
    // })()
}

function writeplaylist(jsondata, playlist) {
    for (var n = 0; n < jsondata.length; n++) {
        tracks[n] = document.createElement("div");
        tracks[n].className = "tracks";
        tracks[n].innerHTML = jsondata[n].name;
        playlist.appendChild(tracks[n]);
    }
}