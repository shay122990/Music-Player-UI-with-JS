const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progress = document.getElementById('progress');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
//Check if Playing
let isPlaying = false;
// Play
function playSong() {
  isPlaying=true
  music.play();
}

// Pause
function pauseSong() {
  isPlaying=false
  music.pause();
}

//Event Listener- Play or Pause
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

