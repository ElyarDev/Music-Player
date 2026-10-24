// SELECTING ELEMENTS
const playBtn = document.querySelector('#play-btn');
const songTitle = document.querySelector('.song-title');
const songCover = document.querySelector('.cover-image');
const coverContainer = document.querySelector('.cover-container');
const artistName = document.querySelector('.artist-name');
const songTime = document.querySelector('.duration');

const audio = new Audio();

let isPlayin = false;

// SONGS DATA
let songs = [{
    id: 1, title: '21', artist: 'Polo G', cover: './assets/img/cover.png', audio: './assets/audio/21-poloG(320).mp3'
}, {
    id: 2, title: 'I Know', artist: 'Polo G', cover: './assets/img/cover.png', audio: '../audio/18 - I Know - Polo G (320).mp3'
}, {
    id: 3, title: 'DND', artist: 'Polo G', cover: './assets/img/cover.png', audio: './assets/audio/113 - DND - Polo G (320).mp3'
}]

// LOAD SONG
let currentSong = 0;

function loadAudio(song) {
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    songCover.src = song.cover;

    audio.src = song.audio;
    audio.addEventListener('loadedmetadata', () => {
        songTime.textContent = formatTime(audio.duration);
    })
}

// FORMAT TIME
function formatTime(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    if (sec < 10) {
        sec = '0' + sec;
    }
    return `${min} : ${sec}`
}

// PLAY SONG
function playSong() {
    isPlayin = true;
    playBtn.innerHTML = '<i class="ri-pause-line"></i>';
    audio.play();
    coverContainer.style.animationPlayState = 'running';
}

// PAUSE SONG
function pauseSong() {
    isPlayin = false;
    playBtn.innerHTML = '<i class="ri-play-line"></i>';
    audio.pause();
    coverContainer.style.animationPlayState = 'paused';
}

playBtn.addEventListener('click', () => {
    isPlayin ? pauseSong() : playSong();
})

// TEST
loadAudio(songs[currentSong]);