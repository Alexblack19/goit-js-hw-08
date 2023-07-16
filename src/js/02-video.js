import Player from '@vimeo/player';
console.log(Player);
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframeEl);

// const KEY_STORAGE = 'videoplayer-current-time';
// localStorage.setItem(KEY_STORAGE, 'Hello');
// player.setCurrentTime(30.456);

// const iframe = document.querySelector('iframe');
//     const player = new Vimeo.Player(iframe);

//     player.on('play', function() {
//         console.log('played the video!');
//     });

//     player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });

// player.on('play', function(data) {
//     playing
//     // data is an object containing properties specific to that event
// });
// var callback = function() {timeupdate};

// player.off('eventName', callback);
