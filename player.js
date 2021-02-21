// let player;
// const playerContainer = $('.player');

// let eventsInit = () => {
//     $('.player__start').click(e => {
//         e.preventDefault();

//         const btn = $(e.currentTarget);

//         playerContainer.addClass("paused");
//         player.playVideo()

//         console.log('click')
//     })
// }
function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
        height: '600',
        width: '940',
        videoId: 'LXb3EKWsInQ',
        events: {
            // 'onReady': onPlayerReady,
            // 'onStateChange': onPlayerStateChange
        },
        playerVars: {
            controls: 0,
            disablekb: 0,
            showinfo: 0,
            rel: 0,
            autoplay: 0,
            modestbranding: 0
        }
    });
}


const video = document.querySelector('#play');
const durationControl = document.querySelector('#duration');
const soundControl = document.querySelector('#sound');

durationControl.addEventListener('input', (e) => {
    console.log(e.target.value);
})

let intervalId;
let soundLevel;
const MAX_SOUND_VALUE = 10;
const NORMAL_UPDATE_RANGE = 1000 / 66;

document.addEventListener('DOMContentLoaded', function () {

    durationControl.min = 0;
    durationControl.value = 0;

    soundControl.min = 0;
    soundControl.max = MAX_SOUND_VALUE;

    initPlayButton();
})

function initPlayButton() {
    const playButtons = document.querySelectorAll('.play');
    playButtons.forEach(button => {
        button.addEventListener('click', playStop)
    })
}

function playStop() {

    durationControl.max = video.duration;

    if (video.paused) {
        video.play();
    } else {
        video.pause()
    }

}
