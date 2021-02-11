let player;
const playerContainer = $('.player');

let eventsInit = () => {
    $('.player__start').click(e => {
        e.preventDefault();

        const btn = $(e.currentTarget);

        playerContainer.addClass("paused");
        player.playVideo()
    })
}
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