import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const KEY_STORAGE = 'videoplayer-current-time';
const vimeoPlayer = new Player(iframeEl);

vimeoPlayer.on('timeupdate', throttle(onCurrentTime, 1000));

function onCurrentTime (e)

// vimeoPlayer.on('play', function () {
//   console.log('played the video!');
// });

// vimeoPlayer.off('play', function () {
//   console.log('stop the video!');
// });

// vimeoPlayer.pause().then(function () {
//   console.log('the video was paused');
// });

//     player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });

// player.on('play', function(data) {
//     playing
//     // data is an object containing properties specific to that event
// });
// var callback = function() {timeupdate};

// player.off('eventName', callback);
