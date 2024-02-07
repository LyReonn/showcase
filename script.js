"use strict";

var folder = "./assets/showcase/";
var plwrap, player, source;
var tracks = [];

window.onload = function () {
    // var url = "https://api.github.com/repos/lyreonn/showcase/contents/assets/showcase/";
    // (async () => {
    //     const response = await fetch(url);
    //     const jsondata = await response.json();
    //     writeplaylist(jsondata, playlist);
    // })()

    plwrap = document.getElementById("playlist");
    player = document.getElementById("player");
    source = document.createElement("source");

    fetch("./filelist.json")
        .then((response) => response.json())
        .then((jsondata) => writeplaylist(jsondata));

    source.setAttribute("src", folder + "PV声音设计-双生幻想.mp4");
    player.appendChild(source);
}

function writeplaylist(jsondata) {
    for (var n = 0; n < jsondata.length; n++) {
        tracks[n] = document.createElement("div");
        tracks[n].innerHTML = jsondata[n].name;
        tracks[n].className = "tracks";
        tracks[n].setAttribute("id", n);
        tracks[n].addEventListener("click", changeplaying);
        plwrap.appendChild(tracks[n]);
    }
}

function changeplaying() {
    player.removeChild(source);
    source.removeAttribute("src");
    source.setAttribute("src", folder + this.innerHTML);
    player.appendChild(source);
}