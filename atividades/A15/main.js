// get all keys
const keys = document.querySelectorAll(".key")

// play notes
function playNote(event) {
    
    let audioKeyCode =  getKeyCode(event)
    // get typed or pressed keyCode
    const key = document.querySelector(`.key[data-key= "${audioKeyCode}" ]`)

    // if key exists
    const doesKeyExist = key

    if (!doesKeyExist) {
        return
    }

    addPlayingClass(key)
    playAudio(audioKeyCode)

}

function addPlayingClass(key) {
    key.classList.add('playing')
}

function removePlayingClass(event) {
    event.target.classList.remove('playing')
}

 function getKeyCode(event) {
    let keyCode

    const isKeyboard = event.type === 'keydown'
    if (isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }
     
    return keyCode
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key= "${audioKeyCode}" ]`)
		audio.currentTime = 0
		audio.play()
}

// click with mouse
function registerEvents() {
    keys.forEach(function (key) {
    
        key.addEventListener('click', playNote)
        key.addEventListener('transitionend', removePlayingClass)
    
    });

    // keyboard type
    window.addEventListener("keydown", playNote)
}

window.addEventListener('load', registerEvents)
