(function () {
    "use strict";

    //Variables 
    let towerURL = "https://github.com/Ventus-Ire/Ronin-Tower";
    let audioURL = "https://people.rit.edu/akn7003/330/audio-visual/audio-visualizer.html";
    let otherURL = "https://github.com/Ventus-Ire/The_Otherside";
    let researchURL = "https://github.com/Ventus-Ire/Vrm-Built";
    let unrealURL = "https://github.com/Ventus-Ire/Unreal_VR_Interactions";
    let touhouURL = "https://people.rit.edu/akn7003/230/project1/project.html";


    function init() {
        document.querySelector("#tower").onclick = function () {
            openWindow(towerURL);
        }

        document.querySelector("#audio").onclick = function () {
            openWindow(audioURL);
        }

        document.querySelector("#other").onclick = function () {
            openWindow(otherURL);
        }

        document.querySelector("#research").onclick = function () {
            openWindow(researchURL);
        }

        document.querySelector("#unreal").onclick = function () {
            openWindow(unrealURL);
        }

        document.querySelector("#touhou").onclick = function () {
            openWindow(touhouURL);
        }

    }

    function openWindow(url) {
        window.open(url, '_blank');
        window.focus();
    }

    window.onload = init;
}());