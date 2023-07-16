import player from '@vimeo/player';

const KEY_STORAGE = 'videoplayer-current-time';
localStorage.setItem(KEY_STORAGE, 'Hello');
// player.setCurrentTime(30.456);


// const iframe = document.querySelector('iframe');
//     const player = new Vimeo.Player(iframe);

//     player.on('play', function() {
//         console.log('played the video!');
//     });

//     player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });