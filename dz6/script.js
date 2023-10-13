const symPlay = "\u23F5";
const symPause = "\u23F8";
const symStop = "\u23F9";
const symFull = "\u26F6";
const symMute = "\u{1F507}";
const symUnmute = "\u{1F508}";
const symLoud = "\u{1F50A}";
const symQuiet = "\u{1F509}";

document.addEventListener("DOMContentLoaded", configClip);
document.addEventListener("DOMContentLoaded", configTrack);

function configClip() {
    window.clip = document.getElementById("videoClip");
    const btnPlay = document.getElementById("btnPlay");
    const btnStop = document.getElementById("btnStop");
    const btnMute = document.getElementById("btnMute");
    const btnLoud = document.getElementById("btnLoud");
    const btnQuiet = document.getElementById("btnQuiet");
    const btnFull = document.getElementById("btnFull");
    const progress = document.querySelector("#clipControls progress");

    window.track = document.getElementById("audioTrack");
    const btnPlayAudio = document.getElementById("btnPlayAudio");
    const btnStopAudio = document.getElementById("btnStopAudio");
    const btnMuteAudio = document.getElementById("btnMuteAudio");
    const btnLoudAudio = document.getElementById("btnLoudAudio");
    const btnQuietAudio = document.getElementById("btnQuietAudio");
    const progressAudio = document.querySelector("#trackControls progress");

    window.clip.controls = false;
    window.track.controls = false;

    progress.max = 100;
    progressAudio.max = 100;
    btnPlay.value = symPlay;
    btnPlayAudio.value = symPlay;
    btnStop.value = symStop;
    btnStopAudio.value = symStop;
    btnMute.value = symMute;
    btnMuteAudio.value = symMute;
    btnLoud.value = symLoud;
    btnLoudAudio.value = symLoud;
    btnQuiet.value = symQuiet;
    btnQuietAudio.value = symQuiet;
    btnFull.value = symFull;

    window.clip.addEventListener('timeupdate', () => {
        progress.value = window.clip.currentTime * 100 / window.clip.duration;
        if (progress.value === 100) {
            btnPlay.value = symPlay;
        }
    });
    window.track.addEventListener('timeupdate', () => {
        progressAudio.value = window.track.currentTime * 100 / window.track.duration;
        if (progressAudio.value === 100) {
            btnPlayAudio.value = symPlay;
        }
    });

    btnPlay.addEventListener('click', play);
    btnPlayAudio.addEventListener('click', playAudio);
    btnStop.addEventListener('click', stop);
    btnStopAudio.addEventListener('click', stopAudio);
    btnMute.addEventListener('click', mute);
    btnMuteAudio.addEventListener('click', muteAudio);
    btnLoud.addEventListener('click', loud);
    btnLoudAudio.addEventListener('click', loudAudio);
    btnQuiet.addEventListener('click', quiet);
    btnQuietAudio.addEventListener('click', quietAudio);
    btnFull.addEventListener('click', full);
}

function play(e) {
    if (window.clip.paused || window.clip.ended) {
        window.clip.play();
        e.target.value = symPause;
    } else {
        window.clip.pause();
        e.target.value = symPlay;
    }
    if (!window.track.paused) {
        window.track.pause();
        document.getElementById("btnPlayAudio").value = symPlay;
    }
}

function playAudio(e) {
    if (window.track.paused || window.track.ended) {
        window.track.play();
        e.target.value = symPause;
    } else {
        window.track.pause();
        e.target.value = symPlay;
    }
    if (!window.clip.paused) {
        window.clip.pause();
        document.getElementById("btnPlay").value = symPlay;
    }
}

function stop() {
    window.clip.pause();
    window.clip.currentTime = 0;
    document.getElementById("btnPlay").value = symPlay;
}

function stopAudio() {
    window.track.pause();
    window.track.currentTime = 0;
    document.getElementById("btnPlayAudio").value = symPlay;
}

function mute(e) {
    if (window.clip.muted) {
        window.clip.muted = false;
        e.target.value = symMute;
    } else {
        window.clip.muted = true;
        e.target.value = symUnmute;
    }
}

function muteAudio(e) {
    if (window.track.muted) {
        window.track.muted = false;
        e.target.value = symMute;
    } else {
        window.track.muted = true;
        e.target.value = symUnmute;
    }
}

function loud() {
    if (window.clip.volume <= 0.9) window.clip.volume += 0.1;
}

function loudAudio() {
    if (window.track.volume <= 0.9) window.track.volume += 0.1;
}

function quiet() {
    if (window.clip.volume >= 0.1) window.clip.volume -= 0.1;
}

function quietAudio() {
    if (window.track.volume >= 0.1) window.track.volume -= 0.1;
}

function full() {
    window.clip.requestFullscreen();
}