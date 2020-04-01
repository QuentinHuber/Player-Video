const video = document.querySelector('.video')
const play = document.querySelector('.play')
const volumeUp = document.querySelector('.volume-up')
const volumeDown = document.querySelector('.volume-down')
const progressBar = player.querySelector('.progress-bar');

play.addEventListener('click', () => {
    if(video.paused){
        video.play()
    }
    else {
        video.pause()
    }
})

volumeDown.addEventListener('click', () => {
    if(video.volume - 0.10 <= 0) {
        video.volume = 0
    }
    else {
        video.volume -= 0.10
    }
    console.log(video.volume)
})

volumeUp.addEventListener('click', () => {
    if(video.volume - 0.10 >= 0) {
        video.volume = 1
    }
    else {
        video.volume += 0.10
    }
    console.log(video.volume)
})

