const player = document.querySelector('.player');
const video = document.querySelector('.player__video');
const progress = document.querySelector('.progress');
const progressbar = document.querySelector('.progress__filled');
const button = document.querySelector('.player__button');
const volume = document.querySelector('input[name="volume"]');
const playBackRate = document.querySelector('input[name="playbackRate"]');
const skipButtons = document.querySelectorAll('[data-skip]');

const fullscr = player.querySelector('[data-fullscreen]');

let mousedown;

function togglePlay(){
    if(video.paused) video.play();
    else video.pause();
}

function toggleButton(){
    if(video.paused) button.textContent = '►';
    else button.textContent = '❚ ❚';
}

function setProperty(e){
    video[this.name] = this.value;
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function updateProgressbar(){
    progressbar.style.flexBasis = `${(this.currentTime / this.duration)*100}%`;
}

function changeProgress(e){
    video.currentTime = (e.offsetX / this.offsetWidth) * video.duration;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', toggleButton);
video.addEventListener('pause', toggleButton);
video.addEventListener('timeupdate', updateProgressbar);
progress.addEventListener('click', changeProgress);

button.addEventListener('click', togglePlay);

volume.addEventListener('mousemove', setProperty);
playBackRate.addEventListener('mousemove', setProperty);
volume.addEventListener('change', setProperty);
playBackRate.addEventListener('change', setProperty);

skipButtons.forEach(btn => btn.addEventListener('click', skip));

fullscr.addEventListener('click', () => video.requestFullscreen());