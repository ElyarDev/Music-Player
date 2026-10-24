// SELECTING ELEMENTS
const playBtn = document.querySelector('#play-btn');
const songTitle = document.querySelector('.song-title');
const songCover = document.querySelector('.cover-image');
const artistName = document.querySelector('.artist-name');
const audio = new Audio();

// SONGS DATA
let songs = [{
    id: 1, title: '21', artist: 'Polo G', cover: '../img/cover.png', audio: '../audio/16 - 21 - Polo G (320).mp3'
}, {
    id: 2, title: 'I Know', artist: 'Polo G', cover: '../img/cover.png', audio: '../audio/18 - I Know - Polo G (320).mp3'
}, {
    id: 3, title: 'DND', artist: 'Polo G', cover: '../img/cover.png', audio: '../audio/113 - DND - Polo G (320).mp3'
}]

// LOAD SONG
function loadAudio(song) {
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    songCover.src = song.cover;
}

loadAudio(songs[0]);