
var video = document.getElementById('myVideo');
var btn = document.getElementsByClassName('btn')[0];

$(btn).click(() => {
    if (btn.classList.contains('show-button')) {
        $(btn).removeClass('show-button');
        video.play();
    }
    else {
        $(btn).addClass('show-button');
        video.pause()
    }
})