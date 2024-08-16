var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
    //click event
    document.querySelectorAll(".drum")[i].addEventListener('click', function () {
        makeSound(this.innerHTML);
        addAnimation(this.innerHTML);
    })
}
//keypress event
document.addEventListener('keypress', function (e) {
    makeSound(e.key);
    addAnimation(e.key);
})

function makeSound(key) {
    var url = '';

    switch (key) {
        case 'w':
            url = 'sounds/tom-1.mp3';
            break;
        case 'a':
            url = 'sounds/tom-2.mp3';
            break;
        case 's':
            url = 'sounds/tom-3.mp3';
            break;
        case 'd':
            url = 'sounds/tom-4.mp3';
            break;
        case 'j':
            url = 'sounds/snare.mp3';
            break;
        case 'k':
            url = 'sounds/kick-bass.mp3';
            break;
        case 'l':
            url = 'sounds/crash.mp3';
            break;
        default:
            break;
    }
    const audio = new Audio(url);
    audio.play();
}
function addAnimation(key){
    var activeButton=document.querySelector('.'+key);
    activeButton.classList.add("pressed");
    setTimeout(()=>{
        activeButton.classList.remove("pressed")
    },100);
}