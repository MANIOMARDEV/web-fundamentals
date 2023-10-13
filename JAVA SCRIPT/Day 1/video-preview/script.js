console.log("page loaded...");

function playVideo(vid) {
    vid.play();
}

function pauseVideo(vid) {
    vid.pause();
    vid.currentTime = 0;
}

function Subscribe(element)
 {
    if (element.innerText =="Subscribe") {
        element.innerText ="Unsubsribe";
    } else {
        element.innerText ="Subscribe";
    }
}