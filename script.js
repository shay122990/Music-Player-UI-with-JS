const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progress = document.getElementById('progress');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

//Music
const songs = [
  {
    name: 'song1',
    displayName: 'Electric',
    artist: 'John Levis'
  },
  {
    name: 'song2',
    displayName: 'Cruise',
    artist: 'John Levis'
  },
  {
    name: 'song3',
    displayName: 'Love',
    artist: 'John Levis'
  },
  {
    name: 'song4',
    displayName: 'Drive',
    artist: 'John Levis'
  }
]
//Check if Playing
let isPlaying = false;
// Play
function playSong() {
  isPlaying = true
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

//Event Listener- Play or Pause
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

//Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `media/${song.name}.mp3`;
  image.src = `media/${song.name}.jpeg`;
}

//Current Song
let songIdx = [0];

//Previous Song
function prevSong() {
  if (songIdx < 0) {
    songIdx = songs.length - 1;
  }
  songIdx--;
  loadSong(songs[songIdx]);
  playSong();
}
//Next Song
function nextSong() {
  if (songIdx > songs.length - 1) {
    songIdx = 0;
  }
  songIdx++;
  loadSong(songs[songIdx]);
  playSong();
}
//OnLoad - Select First Song

loadSong(songs[songIdx]);

//Event Listeners - prev & next buttons
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
